import detectEthereumProvider from "@metamask/detect-provider"
import { Contract, providers } from "ethers"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Link,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

import AddModeratorIcon from "@mui/icons-material/AddModerator"

import BackToWallet from "../../../component/BackToWallet";
import CutomHead from "../../../component/Head";
import Footer from "../../../component/Footer";

import ERC20ServiceFacetAbi from "../../../../contracts/token/ERC20/ERC20ServiceFacet.sol/ERC20ServiceFacet.json";
import ERC20Abi from "../../../../contracts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json";
import styles from "../../../../styles/Home.module.css"

import { parseBalance } from "../../../../utils";
import { TrackedTokens } from "../../../../types";

// export interface IndexProps {
//   serverTrackedTokens: TrackedTokens[]  
// }

const Erc20 = () => {
  // const [logs, setLogs] = React.useState("")
  const [connection, setConnection] = useState("");
  const [signer, setSigner] = useState<providers.JsonRpcSigner>()
  const [signerAddress, setSignerAddress] = useState<string>("")
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [trackedTokens, setTrackedTokens] = useState<TrackedTokens[]>([])
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

      const ethersProvider = new providers.Web3Provider(provider)
      const signerData = ethersProvider.getSigner()
      setSigner(signerData)
      const signerAddress: string = await signerData.getAddress() as string
      setSignerAddress(signerAddress)

      const erc20FacetIntance: any = await new Contract(walletAddress, ERC20ServiceFacetAbi.abi, signer)    

      const trackedTokens = await erc20FacetIntance.getAllTrackedERC20Tokens()
      if (trackedTokens.length > 0) {
        const tmpTrackedTokens: TrackedTokens[] = [];
        for (let i = 0; i < trackedTokens.length; i++) {
          const tokenAddress = trackedTokens[i]
          const balance = await erc20FacetIntance.balanceOfERC20(tokenAddress)
          const erc20Intance: any = await new Contract(tokenAddress, ERC20Abi.abi, signer)
          const tokenName = await erc20Intance.name();
          const tokenSymbol = await erc20Intance.symbol();
          tmpTrackedTokens[i] = {
            tokenName,
            tokenSymbol,
            tokenAddress,
            balance: parseBalance(balance),
          }
        }
        console.log(tmpTrackedTokens)
        setTrackedTokens(tmpTrackedTokens)
      }
    }

    setTimeout(() => {
       // call the function
      fetchProvider()
      // make sure to catch any error
      .catch(console.error);
    }, 3000);

    console.log("address", address)
    const addressString : string = address as string
    setWalletAddress(addressString)

  }, [address, setWalletAddress, signer, setSigner, setSignerAddress, setTrackedTokens]);

  return <div className={styles.container}>
    <CutomHead />
    <main className={styles.main}>
        <h1 className={styles.title}>
          ERC20 tokens
        </h1>
        <div>Your wallet: {walletAddress}</div>
        {trackedTokens.length !== 0 && (<h3>Tracked tokens:</h3>)}
        {trackedTokens.length === 0 && (
          <div className={styles.logs}>No tokens are currently tracked!
          </div>
         )
        }

        {trackedTokens.length === 0 && (
          <div className={styles.logs}>
           Please <u><a href={"erc20/registerERC20"}>register</a></u> or 
           <u><a  href={"erc20/deposit"} > deposit</a></u> a ERC20 token
          </div>
         )
        } 
        {trackedTokens.length !== 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Token name</TableCell>
                <TableCell align="left">Token address</TableCell>
                <TableCell align="left">Token balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trackedTokens.map((row: string | any) => (
                <TableRow
                  key={row.tokenAddress}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                <TableCell component="th" scope="row" align="left">
                  {row.tokenName}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {row.tokenAddress}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {row.balance} {row.tokenSymbol}
                </TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </TableContainer>
        )}

        <br/>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon /> <Link href={"erc20/registerERC20"}>Register token</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon /> <Link href={"erc20/depositERC20"}>Deposit token</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon /> <Link href={"erc20/approveERC20"}>Approve token</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon /> <Link href={"erc20/transferERC20"}>Transfer token</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon /> <Link href={"erc20/removeERC20"}>Remove token</Link>
              </ListItemIcon>
            </ListItem>
          </List>
          <BackToWallet walletAddress={walletAddress}/>
        </Box>           
    </main>
    <Footer />
  </div>
}

// export async function getServerSideProps({ query }: any) {
//   const provider =  (await detectEthereumProvider()) as any;

//   await provider.request({ method: "eth_requestAccounts" })

//   const ethersProvider = new providers.Web3Provider(provider)
//   const signer = ethersProvider.getSigner()
  
//   const walletAddress = query.address as string
//   const erc20FacetIntance: any = await new Contract(walletAddress, ERC20ServiceFacetAbi.abi, signer)    

//   const trackedTokens = await erc20FacetIntance.getAllTrackedERC20Tokens()
//   const serverTrackedTokens: TrackedTokens[] = [];
//   for (let i = 0; i < trackedTokens.length; i++) {
//     const tokenAddress = trackedTokens[i]
//     const balance = await erc20FacetIntance.balanceOfERC20(tokenAddress)
//     const erc20Intance: any = await new Contract(tokenAddress, ERC20Abi.abi, signer)
//     const tokenName = await erc20Intance.name();
//     serverTrackedTokens[i] = {
//       tokenName,
//       tokenAddress,
//       balance: parseBalance(balance),
//     }
//   }

//   return {
//     props: {
//       serverTrackedTokens: serverTrackedTokens
//     }
//   };
// }

export default Erc20
