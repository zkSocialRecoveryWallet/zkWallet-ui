import detectEthereumProvider from "@metamask/detect-provider"
import { Contract, providers } from "ethers"
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import BackToWallet from "../../component/BackToWallet";
import CutomHead from "../../component/Head";
import Footer from "../../component/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SafeOwnableAbi from "../../../contracts/@solidstate/contracts/access/ownable/SafeOwnable.sol/SafeOwnable.json";

const theme = createTheme();
import styles from '../../../styles/Home.module.css'

const Ownership = () => {
  const [logs, setLogs] = React.useState("")
  const [connection, setConnection] = useState("");
  const [provider, setProvider] = useState<any>()
  const [signer, setSigner] = useState<providers.JsonRpcSigner>()
  const [signerAddress, setSignerAddress] = useState<string>("")
  const [walletAddress, setWalletAddress] = useState<string>("");
  const router = useRouter()
  const { address } = router.query

  useEffect(() => {
    const fetchProvider = async () => {
      const provider =  (await detectEthereumProvider()) as any;

      if (provider.chainId === "0x635ae020") {
        setConnection("You are connected to  Harmony Devnet.")
      } else if (provider.chainId === "0x89") {
        setConnection("You are connected to  Polygon Mainnet.")
      } else {
        setConnection("Please connect to Polygon Mainnet or Harmony Devnet!")
      }

      await provider.request({ method: "eth_requestAccounts" })
      setProvider(provider)

      const ethersProvider = new providers.Web3Provider(provider)
      const signerData = ethersProvider.getSigner()
      setSigner(signerData)
      const signerAddress: string = await signerData.getAddress() as string
      setSignerAddress(signerAddress)
    }
  
    // call the function
    fetchProvider()
      // make sure to catch any error
      .catch(console.error);

  }, [signer, setSigner, setSignerAddress, setProvider]);

  useEffect(() => {
    const addressString : string = address as string
    setWalletAddress(addressString)
  }, [address, setWalletAddress])

  const onSubmitHandler = () => {
    acceptOwnership()
  }

  const { handleSubmit, register } = useForm()

  async function acceptOwnership() { 
    const ownableIntance: any = await new Contract(walletAddress, SafeOwnableAbi.abi, signer)

    const nominee = await ownableIntance.nomineeOwner()
    console.log("nominee", nominee)
    console.log("signerAddress", signerAddress)
    if (nominee === signerAddress) {
      try {
        const tx = await ownableIntance.acceptOwnership()
      
        console.log("receipt", await tx.wait())
        setLogs("Ownership accepted!")
  
      } catch (error) {
        setLogs("You are not able to accept ownership, see console for more info")
        console.log("error", error)
      }
    } else {
      setLogs("You are not the nominee of this contract.")
    }   
  }

  return <div className={styles.container}>
    <CutomHead />
    <main className={styles.main}>
        <h1 className={styles.title}>
          Accept Ownership
        </h1>               
        <div>Your wallet: {address}</div>
        <div className={styles.logs}>{logs}</div>          
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" maxWidth="xs">
             <form onSubmit={handleSubmit(onSubmitHandler)} >              
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Accept ownership
                </Button>            
              </form>
              <div className={styles.connection}>{connection}</div>
              <BackToWallet walletAddress={walletAddress}/>
          </Container>
        </ThemeProvider>
    </main>
    <Footer/>

  </div>
}

export default Ownership