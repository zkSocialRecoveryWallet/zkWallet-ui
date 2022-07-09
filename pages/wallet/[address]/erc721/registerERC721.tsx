import detectEthereumProvider from '@metamask/detect-provider'
import { Contract, providers } from 'ethers'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import {
  Button,
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material'

import BackToERC721 from '../../../component/BackToERC721'
import BackToWallet from '../../../component/BackToWallet'
import CutomHead from '../../../component/Head'
import Footer from '../../../component/Footer'

import ERC721ServiceFacetAbi from '../../../../contracts/token/ERC721/ERC721ServiceFacet.sol/ERC721ServiceFacet.json'

const theme = createTheme()
import styles from '../../../../styles/Home.module.css'

import { parseBalance } from '../../../../utils'
import { TrackedTokens } from '../../../../types'

const RegisterERC721 = () => {
  const [logs, setLogs] = React.useState('')
  const [connection, setConnection] = useState('')
  const [signer, setSigner] = useState<providers.JsonRpcSigner>()
  const [signerAddress, setSignerAddress] = useState<string>('')
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [trackedTokens, setTrackedTokens] = useState<TrackedTokens[]>([])
  const router = useRouter()
  const { address } = router.query

  useEffect(() => {
    const fetchProvider = async () => {
      const provider = (await detectEthereumProvider()) as any

      if (provider.chainId === '0x635ae020') {
        setConnection('You are connected to  Harmony Devnet.')
      } else if (provider.chainId === '0x89') {
        setConnection('You are connected to  Polygon Mainnet.')
      } else {
        setConnection('Please connect to Polygon Mainnet or Harmony Devnet!')
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
        const tmpTrackedTokens: TrackedTokens[] = []
        for (let i = 0; i < trackedTokens.length; i++) {
          const tokenAddress = trackedTokens[i]
          const balance = await erc721FacetIntance.balanceOfERC721(tokenAddress)
          const erc721Intance: any = await new Contract(
            tokenAddress,
            ERC721Abi.abi,
            signer,
          )
          const tokenName = await erc721Intance.name()
          const tokenSymbol = await erc721Intance.symbol()
          tmpTrackedTokens[i] = {
            tokenName,
            tokenSymbol,
            tokenAddress,
            balance: parseBalance(balance),
          }
        }
        setTrackedTokens(tmpTrackedTokens)
      }
    }

    setTimeout(() => {
      // call the function
      fetchProvider()
        // make sure to catch any error
        .catch(console.error)
    }, 3000)

    const addressString: string = address as string
    setWalletAddress(addressString)
  }, [
    address,
    setWalletAddress,
    signer,
    setSigner,
    setSignerAddress,
    setTrackedTokens,
  ])

  const onSubmitHandler = (input: any) => {
    registerERC721(input.tokenAddress)
  }

  // form validation rules
  const validationSchema = Yup.object().shape({
    tokenAddress: Yup.string()
      .length(42, 'Address must be 42 characters long')
      .required('tokenAddress is required'),
  })

  const formOptions = {
    resolver: yupResolver(validationSchema),
  }

  const { handleSubmit, register, formState } = useForm(formOptions)
  const { errors } = formState

  async function registerERC721(tokenAddress: string) {
    const instance: any = await new Contract(
      walletAddress,
      ERC721FacetAbi.abi,
      signer,
    )

    try {
      const tx = await instance.registerERC721(tokenAddress)

      console.log('receipt', await tx.wait())

      setLogs('ERC721 tracked!')
    } catch (error) {
      setLogs('You are not able to tracked ERC721, see console for more info')
      console.log('error', error)
    }
  }

  return (
    <div className={styles.container}>
      <CutomHead />
      <main className={styles.main}>
        <h1 className={styles.title}>Register ERC721 token</h1>
        <div>Your wallet: {address}</div>
        {trackedTokens.length !== 0 && <h3>Tracked tokens:</h3>}
        {trackedTokens.length === 0 && (
          <div className={styles.logs}>No tokens are currently tracked!</div>
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
                  <TableCell align="left">Token balance</TableCell>
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
                      {row.balance} {row.tokenSymbol}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <div className={styles.logs}>{logs}</div>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <input
                type="text"
                placeholder="ERC721 token address"
                id="tokenAddress"
                {...register('tokenAddress')}
              >
                className=
                {`form-control ${errors.tokenAddress ? 'is-invalid' : ''}`}
              </input>
              <div className={styles.invalid}>
                {errors.tokenAddress?.message}
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register ERC721 token
              </Button>
            </form>
            <div className={styles.connection}>{connection}</div>
            <BackToERC721 walletAddress={walletAddress} />
            <BackToWallet walletAddress={walletAddress} />
          </Container>
        </ThemeProvider>
        <div hidden>{signerAddress}</div>
      </main>
      <Footer />
    </div>
  )
}

export default RegisterERC721
