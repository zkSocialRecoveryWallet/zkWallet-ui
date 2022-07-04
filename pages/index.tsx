import detectEthereumProvider from "@metamask/detect-provider"
import { Contract, providers, ethers, utils } from "ethers"
import type { NextPage } from "next"
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CutomHead from "./component/Head";
import Footer from "./component/Footer";
import WalletFactoryFacetAbi from "../contracts/facets/WalletFactoryFacet.sol/WalletFactoryFacet.json";
import SemaphoreGroupsFacetAbi from "../contracts/semaphore/SemaphoreGroupsFacet.sol/SemaphoreGroupsFacet.json";
import GuardianFacetAbi from "../contracts/guardian/GuardianFacet.sol/GuardianFacet.json";
import ZkWalletDiamondAbi from "../contracts/diamond/zkWallet/ZkWalletDiamond.sol/ZkWalletDiamond.json";
import { ISemaphoreGroupsFacet, IWalletFactoryFacet, IZkWalletDiamond, IGuardianFacet } from "../typechain-types"
import { Verifier } from "../types"

const theme = createTheme()
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const [logs, setLogs] = React.useState("Connect your wallet to create a new wallet!")
  const [connection, setConnection] = useState("");
  const [provider, setProvider] = useState<any>()
  const [signer, setSigner] = useState<providers.JsonRpcSigner>()
  const [signerAddress, setSignerAddress] = useState<string>("")
  const [connected, setConnected] = useState(false);
  const [walletAddresses, setWalletAddresses] = useState<string[]>([]);
  const [cookies, setCookies] = useCookies(["WALLET_ADDRESSES"]);
  const [walletCreated, setWalletCreated] = useState(false);

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

    if (cookies.WALLET_ADDRESSES) {
      setWalletAddresses(cookies.WALLET_ADDRESSES)
    }

  }, [setWalletAddresses, signer, setSigner, setSignerAddress, setProvider]);

  const { handleSubmit, register } = useForm()

  const onSubmitHandler = () => {
    const newHashId =  randomNumberInRange(1, 10000000)
    console.log("hashId", newHashId)
    createWallet(newHashId);
  }

  async function createWallet(hashId: number) {
    setLogs("Creating your Wallet...")

    let instance: Contract | IWalletFactoryFacet;
    let verifiers: Verifier[] = [];
    let walletDiamond: Contract | IZkWalletDiamond;
    let version: string;
    let semaphoreGroupsInstance: Contract | ISemaphoreGroupsFacet;

    const depth = Number(20);
    const defaultGroupId: number = 1;

    let verifier20Address: string = "";
    let guardianFacetAddress: string = "";
    let eRC20FacetAddress: string = "";
    let eRC721FacetAddress: string = "";
    let recoveryFacetAddress: string = "";
    let semaphoreFacetAddress: string = "";
    let semaphoreGroupsFacetAddress: string = "";
    let semaphoreVotingFacetAddress: string = "";
    let etherServiceFacetAddress: string = "";
    let walletFactory: string = "";

    if (provider.chainId === "0x635ae020") {
      verifier20Address = "0xE01438D4149F180DC67a0f039C426a4B45E75fE6";
      guardianFacetAddress= "0x8b0171517940453212Bc07106016109649C0B5e8";
      eRC20FacetAddress = "0xD28CF919dd16C16f1f90902c85760A9038Fd45cE";
      eRC721FacetAddress = "0xEC70d5Eb3E48c3D1a4CC932C338e94758c33B241";
      recoveryFacetAddress = "0x3659e99A79b226Bf0e016Cdfce2Fb6AE7aD86D26";
      semaphoreFacetAddress = "0xFa0f163e526F322611f876C0805df90DfE1717C5";
      semaphoreGroupsFacetAddress = "0x3ca6f23Ba34162A215a06D120DDd75275324422f";
      walletFactory = "0x1D7517e85eF2c0b6741D2c61a911c00D88f45a90";
      etherServiceFacetAddress = "0x53fB90541C8c17D9Aca0c4F566D4BE5BC450B36b";
    } else if (provider.chainId === "0x89") {
      verifier20Address = "0x727C8e95D76Feef514c1AF34d4CDAE61266FC2Ba";
      guardianFacetAddress= "0x9b28bED203EDd813d6D278FC8AF9743CEeB081A0";
      eRC20FacetAddress = "0xf6CBd386fAE126414Ac3eAD9b6419Ed620f17446";
      eRC721FacetAddress = "0xc241533F9D0F9DEC506d5D8da68C430BAFd26e5A";
      recoveryFacetAddress = "0x1CB9e127D7f25C2dE99de822B72B47da85a3D37E";
      semaphoreFacetAddress = "0x0D47a2Ca986fCCAFCe7b93178383c64855241704";
      semaphoreGroupsFacetAddress = "0xb1a9662b07263CB7419eBa90fA7cF835ee686965";
      walletFactory = "0x083409136b251DC1A8c47958874C80197424dFdF";
      etherServiceFacetAddress = "0x17aBCcd552D3D026dCfDA1BB1E3F4C107Fcb288b";
    } else {
      console.log("provider.chainId", provider.chainId)
      setConnection("Please connect to Polygon Mainnet or Harmony Devnet!")
    }
   
    instance  = await new Contract(walletFactory, WalletFactoryFacetAbi.abi, signer);

    //check if contract is callable
    try {
      version = await instance.walletFactoryFacetVersion()
      console.log("walletFactoryFacetVersion: ", version)
      if (version === "0.1.0.alpha") {
        setConnected(true)
        console.log("connected", connected)
        try {
          setLogs("Creating your wallet...")              
        
          verifiers = [
            { merkleTreeDepth: depth, contractAddress: verifier20Address },
          ];

          console.log("hashID: ", utils.formatBytes32String(hashId.toString()))
          const trx = await instance.createWallet(utils.formatBytes32String(hashId.toString()), signerAddress, verifiers)
          const txEvent = await trx.wait();
          console.log("txEvent:", txEvent);
          if (txEvent.events) {
            const event = txEvent.events[0];
            const newWalletAddress = event.address;            

            setLogs(`Your wallet address: ${newWalletAddress}`)
            if (!walletAddresses) {
              setWalletAddresses(newWalletAddress);
            } else {
              setWalletAddresses([...walletAddresses,  newWalletAddress]);
            }
            setCookies("WALLET_ADDRESSES", [...walletAddresses,  newWalletAddress]);

            walletDiamond = new Contract(newWalletAddress, ZkWalletDiamondAbi.abi, signer);
            console.log("walletDiamond: ", await walletDiamond.version())

            const guardianInstance: Contract | IGuardianFacet = await new Contract(guardianFacetAddress, GuardianFacetAbi.abi, signer);
            const guardianFacetVersion = await guardianInstance.guardianFacetVersion();
            console.log("guardianFacetVersion: ", guardianFacetVersion)
            console.log(await instance.getFacets())
          
            semaphoreGroupsInstance = await new Contract(newWalletAddress, SemaphoreGroupsFacetAbi.abi, signer)
            console.log(semaphoreGroupsInstance)

            const semaphoreGroupsFacetVersion = await semaphoreGroupsInstance.semaphoreGroupsFacetVersion()
            console.log("semaphoreGroupsFacetVersion: ", semaphoreGroupsFacetVersion)
            if (semaphoreGroupsFacetVersion === "0.1.0.alpha") {   
              try {
                setLogs("Creating SemaphoreGroups to your wallet...")
                console.log("facets: ", await walletDiamond.facets())
                const groupTransaction = await semaphoreGroupsInstance.createGroup(defaultGroupId, depth, 0, signerAddress);
                const receiptGroup = await groupTransaction.wait();
                console.log("receiptGroup: ", receiptGroup)                   
                setLogs("Your Wallet is ready")
                setWalletCreated(true)

              } catch (groupTransactionError) {
                setLogs("Error: can not create SemaphoreGroups for your wallet!")
                console.log("groupTransactionError: ", groupTransactionError)
              }                 

            } else {
              setLogs("One of the Facets version is not supported by this dApp!")
            }
          } else {
            setLogs("NewDiamondWallet event not found!")
          }
        } catch (createWalletError) {
          setLogs("Error creating your wallet. Please try again.")
        }
      } else {
        setLogs(`The Wallet Facory: ${process.env.NEXT_PUBLIC_FACTORY_DIAMOND_ADDRESS}  is not supported by this dApp!`)
      }
    } catch (error) {
      setLogs(`Non a WalletFactoryFacet contract`)
      console.log(error)
    }
  }


  function randomNumberInRange(min: number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className={styles.container}>
      <CutomHead/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
        </h1>
        <a href="https://simplicy.io">
          <img src="/images/zkWallet.png" alt="zkWalllet" width={600}/>
        </a>
        <div className={styles.logs}>{logs}</div>
        <br/>
        <br/>
        <div className={styles.logs}>Your wallets</div>
        {walletAddresses && 
          walletAddresses.map((element, index) => {
            return (
              <div key={index}>
                <u><a href={"/wallet/" +element}>{element}</a></u>
              </div>
            );
          })
        }

        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >             
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <AccountBalanceWalletIcon />
              </Avatar>
              <form onSubmit={handleSubmit(onSubmitHandler)} >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create a new wallet
                </Button>            
              </form>
              <div className={styles.connection}>{connection}</div>
            </Box>
          </Container>
        </ThemeProvider>

      </main>
      <Footer/>
     
    </div>
  )
}

export default Home
