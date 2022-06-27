import detectEthereumProvider from "@metamask/detect-provider"
import { BigNumber, constants, Contract, providers, utils } from "ethers"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import Link from '@mui/material/Link';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextBox from "./component/TextBox"; 
import WalletFactoryFacetAbi from "../contracts/facets/WalletFactoryFacet.sol/WalletFactoryFacet.json";
import SimplicyWalletDiamondAbi from "../contracts/diamond/SimplicyWalletDiamond.sol/SimplicyWalletDiamond.json";
import GuardianFacetAbi from "../contracts/facets/GuardianFacet.sol/GuardianFacet.json";
import ERC20FacetAbi from "../contracts/facets/ERC20Facet.sol/ERC20Facet.json";
import ERC721FacetAbi from "../contracts/facets/ERC721Facet.sol/ERC721Facet.json";
import RecoveryFacetAbi from "../contracts/facets/RecoveryFacet.sol/RecoveryFacet.json";
import SemaphoreFacetAbi from "../contracts/facets/SemaphoreFacet.sol/SemaphoreFacet.json";
import SemaphoreGroupsFacetAbi from "../contracts/facets/SemaphoreGroupsFacet.sol/SemaphoreGroupsFacet.json";
import SemaphoreVotingFacetAbi from "../contracts/facets/SemaphoreVotingFacet.sol/SemaphoreVotingFacet.json";
import { IGuardianFacet, ISemaphore, ISemaphoreGroups, ISimplicyWalletDiamond } from "../typechain-types"
import { DeployedContract, Verifier } from "../types"

const theme = createTheme();
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  const [logs, setLogs] = React.useState("Connect your wallet to create a new wallet!")
  const [hashId, setHashId] = useState(randomNumberInRange(1, 10000000));
  const [connected, setConnected] = useState(false);
  const [walletAddresses, setWalletAddresses] = useState<string[]>([]);

  const { handleSubmit, register } = useForm()

  const onSubmitHandler = (input: any) => {
    setHashId(input.hashId)
    createWallet();
  }

  async function createWallet() {
    setLogs("Creating your Wallet...")

    const provider = (await detectEthereumProvider()) as any

    if (provider.chainId === "0x635ae020") {
      setLogs("You are connected to  Harmony One Devnet...")

      let verifier20Address: string = "0x21176AA38497bdeab3CdB4368CFF53c428B001f7";
      let guardianFacetAddress: string = "0x3d4370D915c52E801963533E0aC54EAF4a57177b";
      let eRC20FacetAddress: string = "0x5BA6985e2F04cA4Ef362dCFF0Ac793E1715F2E10";
      let eRC721FacetAddress: string = "0xEA33dC1D03A626C899dfA6bD9BA61AcEce886AF1";
      let recoveryFacetAddress: string = "0xC509433465D6e3b60CA192e81659BBEDffE7fd3b";
      let semaphoreFacetAddress: string = "0xF6f822A0aaE0CDd6dDb6c0BA7284a74B006A0824";
      let semaphoreGroupsFacetAddress: string = "0x7bA44FAF27B18d04Af0950f30617B5AAACceC038";
      let semaphoreVotingFacetAddress: string = "0x43133D828f1E4c209eB60B4fEbD01221C72E4Ca4";

      const ethersProvider = new providers.Web3Provider(provider)
      const signer = ethersProvider.getSigner()
      const message = await signer.signMessage("Sign this message to login!")      
      const signerAddress: string = await signer.getAddress() as string
      console.log("signer address: ",  signerAddress)
      console.log("message: ", message)
      let version: string;
      let facets: DeployedContract[];
      let guardianInstance: Contract | IGuardianFacet;
      let semaphoreInstance: Contract | ISemaphore;
      let semaphoreGroupsInstance: Contract | ISemaphoreGroups;
      let facetCuts: { target: string; action: number; selectors: any }[] = [];
      let diamond: any | ISimplicyWalletDiamond;

      const depth = Number(20);
      const defaultGroupId: number = 1;

      const verifiers: Verifier[] = [
        { merkleTreeDepth: depth, contractAddress: verifier20Address },
      ];

      facets = [
        {
          name: "GuardianFacet",
          contract: await new Contract(
            guardianFacetAddress,
            GuardianFacetAbi.abi,
            signer
          ),
          address: guardianFacetAddress,
        },
        {
          name: "ERC20Facet",
          contract: await new Contract(
            eRC20FacetAddress,
            ERC20FacetAbi.abi,
            signer
          ),
          address: eRC20FacetAddress,
        },
        {
          name: "ERC721Facet",
          contract: await new Contract(
            eRC721FacetAddress,
            ERC721FacetAbi.abi,
            signer
          ),
          address: eRC721FacetAddress,
        },
        {
          name: "RecoveryFacet",
          contract: await new Contract(
            recoveryFacetAddress,
            RecoveryFacetAbi.abi,
            signer
          ),
          address: recoveryFacetAddress,
        },
        {
          name: "SemaphoreFacet",
          contract: await new Contract(
            semaphoreFacetAddress,
            SemaphoreFacetAbi.abi,
            signer
          ),
          address: semaphoreFacetAddress,
        },
        {
          name: "SemaphoreGroupsFacet",
          contract: await new Contract(
            semaphoreGroupsFacetAddress,
            SemaphoreGroupsFacetAbi.abi,
            signer
          ),
          address: semaphoreGroupsFacetAddress,
        },
        {
          name: "SemaphoreVotingFacet",
          contract: await new Contract(
            semaphoreVotingFacetAddress,
            SemaphoreVotingFacetAbi.abi,
            signer
          ),
          address: semaphoreVotingFacetAddress,
        },
      ];

      facetCuts = [
        {
          target: facets[0].address,
          action: 0,
          selectors: Object.keys(facets[0].contract.interface.functions).map((fn) =>
            facets[0].contract.interface.getSighash(fn)
          ),
        },
        {
          target: facets[1].address,
          action: 0,
          selectors: Object.keys(facets[1].contract.interface.functions).map((fn) =>
            facets[1].contract.interface.getSighash(fn)
          ),
        },
        {
          target: facets[2].address,
          action: 0,
          selectors: Object.keys(facets[2].contract.interface.functions).map((fn) =>
            facets[2].contract.interface.getSighash(fn)
          ),
        },
        {
          target: facets[3].address,
          action: 0,
          selectors: Object.keys(facets[3].contract.interface.functions).map((fn) =>
            facets[3].contract.interface.getSighash(fn)
          ),
        },
        {
          target: facets[4].address,
          action: 0,
          selectors: Object.keys(facets[4].contract.interface.functions).map((fn) =>
            facets[4].contract.interface.getSighash(fn)
          ),
        },
        {
          target: facets[5].address,
          action: 0,
          selectors: Object.keys(facets[5].contract.interface.functions).map((fn) =>
            facets[5].contract.interface.getSighash(fn)
          ),
        },
        {
          target: facets[6].address,
          action: 0,
          selectors: Object.keys(facets[6].contract.interface.functions).map((fn) =>
            facets[6].contract.interface.getSighash(fn)
          ),
        },
      ];

      const identityCommitments: BigNumber[] = [
        BigNumber.from(
          BigInt(
            "417120863369177508448587683482618072152507466439565022803025664957553068359"
          )
        ),
        BigNumber.from(
          BigInt(
            "2406831775386746519644490267981058842396908979429908114658351987980684638639"
          )
        ),
        BigNumber.from(
          BigInt(
            "15064152082777430876487719843144077929032170478230727111576035711043722732420"
          )
        ),
      ];
    

      const contract: any  = new Contract(
        process.env.NEXT_PUBLIC_FACTORY_DIAMOND_ADDRESS as string,
        WalletFactoryFacetAbi.abi,
        signer
      );

       //check if contract is callable
       try {
        version = await contract.walletFactoryFacetVersion()
        console.log("walletFactoryFacetVersion: ", version)
        console.log("diamond: ", await contract.getDiamond())
        if (version === "0.0.1") {
          setConnected(true)
          try {
            setLogs("Creating your wallet...")
            const trx = await contract.createWallet(utils.formatBytes32String(hashId.toString()), signerAddress)
            const txEvent = await trx.wait();
            console.log("txEvent:", txEvent);
            if (txEvent.events.length > 0) {
              const event = txEvent.events[0];
              // setEvents((JSON.stringify(txEvent.events[1])).toString())
              setLogs(`Your wallet address: ${event.address}`)    
              setWalletAddresses(prevState => [...prevState,  event.address]);

              diamond = await new Contract(event.address, SimplicyWalletDiamondAbi.abi, signer)
              guardianInstance = await new Contract(event.address, GuardianFacetAbi.abi, signer)
              semaphoreInstance = await new Contract(event.address, SemaphoreFacetAbi.abi, signer)
              semaphoreGroupsInstance = await new Contract(event.address, SemaphoreGroupsFacetAbi.abi, signer)

              try {
                setLogs("Adding Facets your wallet...")
                
                const cutstx = await diamond.diamondCut(facetCuts, constants.AddressZero, "0x"); 
                const receiptCuts = await cutstx.wait();
                console.log("receiptCuts: ", receiptCuts)

                setLogs("Checking facets versions...")
                
                const guardianFacetVersion =  await guardianInstance.guardianFacetVersion()
                const semaphoreFacetVersion =  await semaphoreInstance.semaphoreFacetVersion()
                const semaphoreGroupsFacetVersion = await semaphoreGroupsInstance.semaphoreGroupsFacetVersion()
                if (guardianFacetVersion === "0.0.1" && semaphoreFacetVersion === "0.0.1" && semaphoreGroupsFacetVersion === "0.0.1") {   
                  try {
                    setLogs("Set Verifier20 to your wallet...")
                    const semaphoreTrx = await semaphoreInstance.setVerifiers(verifiers);
                    const receiptSemaphoreTrx = await semaphoreTrx.wait();
                    console.log("receiptSemaphoreTrx: ", receiptSemaphoreTrx)
                  } catch (addVerifierError) {
                    setLogs("Can not add verifier to your wallet")
                    console.log("addVerifierError: ", addVerifierError)
                  }

                  try {
                    setLogs("Creating SemaphoreGroups to your wallet...")
                    const groupTransaction = await semaphoreGroupsInstance.createGroup(defaultGroupId, depth, 0, signerAddress);
                    const receiptGroup = await groupTransaction.wait();
                    console.log("receiptGroup: ", receiptGroup)                   

                    try {
                      setLogs("Adding default guardians to your wallet...")
                      console.log("guardians to be added: ", identityCommitments)
                      const guardianTrx = await guardianInstance.addGuardians(defaultGroupId, identityCommitments);
                      const receiptGuardian = await guardianTrx.wait();
                      console.log("Adding guardians: ", receiptGuardian)

                      setLogs("Checking guardians ...")
                      const guardians = await guardianInstance.getGuardians(defaultGroupId);
                      console.log("guardians: ", guardians)
                      if (guardians.length === 3) {
                        setLogs("Guardians are added to your wallet!")
                      }
                    } catch (guardianError) {
                      console.log("Adding guardianError: ", guardianError)
                      setLogs("Error: can not add default guardians for your wallet!")
                    }

                  } catch (groupTransactionError) {
                    setLogs("Error: can not create SemaphoreGroups for your wallet!")
                    console.log("groupTransactionError: ", groupTransactionError)
                  }                 

                } else {
                  setLogs("One of the Facets version is not supported by this dApp!")
                }
              } catch (cutsError) {
                console.log("cutsError: ", cutsError)
              }


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
    } else {
      setLogs("Please change your network to Harmony One Devnet...")
    }
  }


  function randomNumberInRange(min: number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>zkSocialRecovery Wallet</title>
        <meta name="description" content="zk-SocialRecovery Wallet is a smart contract wallet using zk-SNARKS to restore a user's access to their smart contract wallet, without revealing any information of the user's and guardians." />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />       
      </Head>

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
        <div className={styles.logs}>Your new Wallet addresses:</div>
        {walletAddresses.map((element, index) => {
          return (
            <div key={index}>
              <h2>{element}</h2>
            </div>
          );
        })}


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
                <input 
                  hidden 
                  type="text" 
                  id="hashId"
                  {...register("hashId")} >                  
                </input>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create a new wallet
                </Button>            
              </form>
            </Box>
          </Container>
        </ThemeProvider>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <Link href="https://github.com/zkWallet/zkWallet-docs">Github documentation</Link>
      </footer>
    </div>
  )
}

export default Home
