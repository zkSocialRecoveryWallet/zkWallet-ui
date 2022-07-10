import detectEthereumProvider from '@metamask/detect-provider'
import { Contract, providers } from 'ethers'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

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
} from '@mui/material'

import AddModeratorIcon from '@mui/icons-material/AddModerator'

import BackToWallet from '../../../component/BackToWallet'
import CutomHead from '../../../component/Head'
import Footer from '../../../component/Footer'

import ERC721ServiceFacetAbi from '../../../../contracts/token/ERC721/ERC721ServiceFacet.sol/ERC721ServiceFacet.json'
import ERC721Abi from '../../../../contracts/@openzeppelin/contracts/token/ERC721/ERC721.sol/ERC721.json'
import styles from '../../../../styles/Home.module.css'

import { TrackedERC721Tokens } from '../../../../types'


const Erc721 = () => {
  const [connection, setConnection] = useState('')
  const [signer, setSigner] = useState<providers.JsonRpcSigner>()
  const [provider, setProvider] = useState<any>()
  const [signerAddress, setSignerAddress] = useState<string>('')
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [trackedTokens, setTrackedTokens] = useState<TrackedERC721Tokens[]>([])
  const router = useRouter()
  const { address } = router.query

  useEffect(() => {
    const fetchProvider = async () => {
      const provider = (await detectEthereumProvider()) as any
      setProvider(provider)
      if (provider.chainId === '0x635ae020') {
        setConnection('You are connected to  Harmony Devnet.')
      } else if (provider.chainId === '0x89') {
        setConnection('You are connected to  Polygon Mainnet.')
      } else if (provider.chainId === '0xa') {
        setConnection('You are connected to  Optimism Mainnet.')
      } else {
        setConnection(
          'Please connect to Polygon-, Optimism mainnet or Harmony Devnet!',
        )
      }

      await provider.request({ method: 'eth_requestAccounts' })

      const ethersProvider = new providers.Web3Provider(provider)
      const signerData = ethersProvider.getSigner()
      setSigner(signerData)
      const signerAddress: string = (await signerData.getAddress()) as string
      setSignerAddress(signerAddress)

      const erc721FacetIntance: any = await new Contract(
        walletAddress,
        ERC721ServiceFacetAbi.abi,
        signer,
      )

      const trackedTokens = await erc721FacetIntance.getAllTrackedERC721Tokens()
      if (trackedTokens.length > 0) {
        const tmpTrackedTokens: TrackedERC721Tokens[] = []
        for (let i = 0; i < trackedTokens.length; i++) {
          const tokenAddress = trackedTokens[i]
          const erc721Intance: any = await new Contract(
            tokenAddress,
            ERC721Abi.abi,
            signer,
          )
          const tokenName = await erc721Intance.name()
          const tokenSymbol = await erc721Intance.symbol()
          const tokenUri = await erc721Intance.tokenURI(walletAddress)
          tmpTrackedTokens[i] = {
            tokenName,
            tokenSymbol,
            tokenAddress,
            tokenUri,
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
        .catch(console.error)
    }, 3000)
  }, [walletAddress, signer, signerAddress, provider])

  useEffect(() => {
    const addressString: string = address as string
    setWalletAddress(addressString)
  }, [address])

  return (
    <div className={styles.container}>
      <CutomHead />
      <main className={styles.main}>
        <h1 className={styles.title}>ERC721 tokens</h1>
        <div>Your wallet: {walletAddress}</div>
        {trackedTokens.length !== 0 && <h3>Tracked tokens:</h3>}
        {trackedTokens.length === 0 && (
          <div className={styles.logs}>No tokens are currently tracked!</div>
        )}

        {trackedTokens.length === 0 && (
          <div className={styles.logs}>
            Please{' '}
            <u>
              <a href={'erc721/registerERC721'}>register</a>
            </u>{' '}
            or
            <u>
              <a href={'erc721/deposit'}> deposit</a>
            </u>{' '}
            a ERC721 token
          </div>
        )}
        {trackedTokens.length !== 0 && (
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Token name</TableCell>
                  <TableCell align="left">Token address</TableCell>
                  <TableCell align="left">Token url</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trackedTokens.map((row: string | any) => (
                  <TableRow
                    key={row.tokenAddress}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="left">
                      {row.tokenName}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {row.tokenAddress}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {row.balance} {row.tokenUri}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <br />
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon />{' '}
                <Link href={'erc721/registerERC721'}>Register token</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon />{' '}
                <Link href={'erc721/depositERC721'}>Deposit token</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon />{' '}
                <Link href={'erc721/approveERC721'}>Approve token</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon />{' '}
                <Link href={'erc721/transferERC721'}>Transfer token</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon />{' '}
                <Link href={'erc721/removeERC721'}>Remove token</Link>
              </ListItemIcon>
            </ListItem>
          </List>
          <BackToWallet walletAddress={walletAddress} />
        </Box>
      </main>
      <div className={styles.connection}>{connection}</div>
      <div hidden>{signerAddress}</div>
      <Footer />
    </div>
  )
}

export default Erc721
