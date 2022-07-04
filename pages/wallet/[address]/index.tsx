import detectEthereumProvider from "@metamask/detect-provider"
import { Contract, providers, utils } from "ethers"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from "@mui/material/Link";
import AddModeratorIcon from '@mui/icons-material/AddModerator'
import AddBoxIcon from '@mui/icons-material/AddBox'
import styles from '../../../styles/Home.module.css'
import CutomHead from "../../component/Head";
import Footer from "../../component/Footer";

import { parseBalance } from "../../../utils";
import IEtherServiceFacetAbi from "../../../contracts/interfaces/IEtherServiceFacet.sol/IEtherServiceFacet.json"

const Wallet = () => {
  const [logs, setLogs] = React.useState("")
  const [connection, setConnection] = useState("");
  const [signer, setSigner] = useState<providers.JsonRpcSigner>()
  const [signerAddress, setSignerAddress] = useState<string>("")
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [walletBalance, setWalletBalance] = useState<string>("");
  const router = useRouter()
  const { address } = router.query

  useEffect(() => {
    console.log("address", address)
    const addressString : string = address as string
    setWalletAddress(addressString)

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

      const ethersProvider = new ethers.providers.Web3Provider(provider)

      const signerData = ethersProvider.getSigner()
      setSigner(signerData)
      const signerAddress: string = await signerData.getAddress() as string
      setSignerAddress(signerAddress)

      const etherServiceFacetInstance: any = await new Contract(walletAddress, IEtherServiceFacetAbi.abi, signer)   
      const etherBalance = await etherServiceFacetInstance.getEtherBalance()
      setWalletBalance(parseBalance(etherBalance))
    }
  
    setTimeout(() => {
      // call the function
     fetchProvider()
     // make sure to catch any error
     .catch(console.error);
    }, 3000);

  }, [address, walletAddress, setWalletAddress, setWalletBalance])

  return <div className={styles.container}>
    <CutomHead />
    <main className={styles.main}>
        <h1 className={styles.title}>
          Wallet
        </h1>
        <div>Your wallet: {walletAddress}</div>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon /> <Link href={walletAddress +"/addGuardians"}>Add guardians</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon /> <Link href={walletAddress +"/acceptOwnership"}>Accept ownership</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon /> <Link href={walletAddress +"/transferOwnership"}>Transfer ownership</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddBoxIcon /> <Link href={walletAddress +"/erc20/"}>Send/Receive ERC20</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddBoxIcon /> <Link href={walletAddress +"/erc721/"}>Send/Receive ERC721</Link>
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>           
    </main>
    <Footer />
  </div>
}

export default Wallet


