import detectEthereumProvider from "@metamask/detect-provider"
import { Contract, providers } from "ethers"
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from "next/router"
import { Button, Container, CssBaseline, Input} from "@mui/material";

import BackToWallet from "../../component/BackToWallet";
import CutomHead from "../../component/Head";
import Footer from "../../component/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OwnableAbi from "../../../contracts/@solidstate/contracts/access/ownable/Ownable.sol/Ownable.json";

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

  const onSubmitHandler = (input: any) => {
    transferOwnership(input.newOwner)
  }

  
  // form validation rules 
  const validationSchema = Yup.object().shape({
    newOwner: Yup.string()
      .length(42, 'Address must be 42 characters long')
      .required('newOwner is required'),    
  });

  const formOptions = { 
      resolver: yupResolver(validationSchema),
  };

  const { handleSubmit, register, formState } = useForm(formOptions)
  const { errors } = formState;

  async function transferOwnership(newOwner: string) { 
    const ownableIntance: any = await new Contract(walletAddress, OwnableAbi.abi, signer)

    try {
      const tx = await ownableIntance.transferOwnership(newOwner)
    
      console.log("receipt", await tx.wait())
      setLogs("Ownership transfered!")

    } catch (error) {
      setLogs("You are not able to transfer ownership, see console for more info")
      console.log("error", error)
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
          <Container component="main" maxWidth="xs">
            <CssBaseline />
             <form onSubmit={handleSubmit(onSubmitHandler)} > 
                <Input                    
                  type="text" 
                  placeholder="New owner address"
                  id="newOwner"                  
                  {...register("newOwner")} > 
                  className={`form-control ${errors.newOwner ? 'is-invalid' : ''}`}                 
                </Input>  
                <div className={styles.invalid}>{errors.newOwner?.message}</div>           
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Transfer ownership
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