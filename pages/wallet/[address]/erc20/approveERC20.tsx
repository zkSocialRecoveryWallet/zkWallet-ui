import detectEthereumProvider from '@metamask/detect-provider'
import { Contract, providers, utils } from 'ethers'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import {
  Button,
  Container,
  CssBaseline,
  TextField,
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

import BackToERC20 from '../../../component/BackToERC20'
import BackToWallet from '../../../component/BackToWallet'
import CutomHead from '../../../component/Head'
import Footer from '../../../component/Footer'

import ERC20ServiceFacetAbi from '../../../../contracts/token/ERC20/ERC20ServiceFacet.sol/ERC20ServiceFacet.json'
import ERC20Abi from '../../../../contracts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json'

const theme = createTheme()
import styles from '../../../../styles/Home.module.css'
import { parseBalance } from '../../../../lib/utils'
import { TrackedTokens } from '../../../../types'

type UserInput = {
  tokenAddress: string
  spenderAddress: string
  tokenAmount: number
}

const ApproveERC20 = () => {
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

      const erc20FacetIntance: any = await new Contract(
        walletAddress,
        ERC20ServiceFacetAbi.abi,
        signer,
      )

      const trackedTokens = await erc20FacetIntance.getAllTrackedERC20Tokens()
      if (trackedTokens.length > 0) {
        const tmpTrackedTokens: TrackedTokens[] = []
        for (let i = 0; i < trackedTokens.length; i++) {
          const tokenAddress = trackedTokens[i]
          const balance = await erc20FacetIntance.balanceOfERC20(tokenAddress)
          const erc20Intance: any = await new Contract(
            tokenAddress,
            ERC20Abi.abi,
            signer,
          )
          const tokenName = await erc20Intance.name()
          const tokenSymbol = await erc20Intance.symbol()
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

  }, [
    walletAddress,
    signer,
    setSigner,
    setSignerAddress,
    setTrackedTokens,
  ])

  useEffect(() => {
    const addressString: string = address as string
    setWalletAddress(addressString)
  }, [address])

  // form validation rules
  const validationSchema = Yup.object().shape({
    tokenAddress: Yup.string()
      .length(42, 'Address must be 42 characters long')
      .required('tokenAddress is required'),
    spenderAddress: Yup.string()
      .length(42, 'Address must be 42 characters long')
      .required('spenderAddress is required'),
    tokenAmount: Yup.number()
      .required('tokenAmount is required')
      .positive('tokenAmount must be positive'),
  })

  const formOptions = {
    resolver: yupResolver(validationSchema),
  }

  const { handleSubmit, register, formState } = useForm<UserInput>(formOptions)
  const { errors } = formState

  const onSubmitHandler = (input: UserInput) => {
    approveERC20(input.tokenAddress, input.spenderAddress, input.tokenAmount)
  }

  async function approveERC20(
    tokenAddress: string,
    spenderAddress: string,
    tokenAmount: number,
  ) {
    const instance: any = await new Contract(
      walletAddress,
      ERC20ServiceFacetAbi.abi,
      signer,
    )
    const erc20Intance: any = await new Contract(
      tokenAddress,
      ERC20Abi.abi,
      signer,
    )
    const tokenDecimals = await erc20Intance.decimals()

    try {
      const tx = await instance.approveERC20(
        tokenAddress,
        spenderAddress,
        utils.parseUnits(tokenAmount.toString(), tokenDecimals),
      )
      console.log(await tx.wait())
      setLogs(
        `ERC20 allowed amount ${tokenAmount} for spender ${spenderAddress}`,
      )
    } catch (error) {
      setLogs('You are not able to approve ERC20, see console for more info')
      console.log('error', error)
    }
  }

  return (
    <div className={styles.container}>
      <CutomHead />
      <main className={styles.main}>
        <h1 className={styles.title}>Approve ERC20 token</h1>
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
              <TextField
                type="text"
                placeholder="ERC20 token address"
                id="tokenAddress"
                {...register('tokenAddress')}
              >
                className=
                {`form-control ${errors.tokenAddress ? 'is-invalid' : ''}`}
              </TextField>
              <div className={styles.invalid}>
                {errors.tokenAddress?.message}
              </div>
              <TextField
                type="text"
                placeholder="Spender address"
                id="spenderAddress"
                {...register('spenderAddress')}
              >
                className=
                {`form-control ${errors.spenderAddress ? 'is-invalid' : ''}`}
              </TextField>
              <div className={styles.invalid}>
                {errors.spenderAddress?.message}
              </div>
              <TextField
                type="float"
                placeholder="ERC20 token amount"
                id="tokenAmount"
                {...register('tokenAmount')}
              >
                className=
                {`form-control ${errors.tokenAmount ? 'is-invalid' : ''}`}
              </TextField>
              <div className={styles.invalid}>
                {errors.tokenAmount?.message}
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Approve ERC20 token
              </Button>
            </form>
            <div className={styles.connection}>{connection}</div>
            <BackToERC20 walletAddress={walletAddress} />
            <BackToWallet walletAddress={walletAddress} />
          </Container>
        </ThemeProvider>
      </main>
      <Footer />
    </div>
  )
}

export default ApproveERC20
