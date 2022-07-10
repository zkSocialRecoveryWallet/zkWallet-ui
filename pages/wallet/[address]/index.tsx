import detectEthereumProvider from '@metamask/detect-provider'
import { Contract, providers, ethers, utils } from 'ethers'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import {
  Box,
  Button,
  Container,
  CssBaseline,
  createTheme,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ThemeProvider,
  TextField,
} from '@mui/material'

import AddBoxIcon from '@mui/icons-material/AddBox'
import AddModeratorIcon from '@mui/icons-material/AddModerator'

const theme = createTheme()

import styles from '../../../styles/Home.module.css'
import CutomHead from '../../component/Head'
import Footer from '../../component/Footer'

import { parseBalance } from '../../../lib/utils'
import IEtherServiceFacetAbi from '../../../contracts/interfaces/IEtherServiceFacet.sol/IEtherServiceFacet.json'

type UserInput = {
  toAddress: string
  amount: number
}

const Wallet = () => {
  const [logs, setLogs] = React.useState('')
  const [connection, setConnection] = useState('')
  const [provider, setProvider] = useState<any>()
  const [signer, setSigner] = useState<providers.JsonRpcSigner>()
  const [signerAddress, setSignerAddress] = useState<string>('')
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [walletBalance, setWalletBalance] = useState<string>('0.00')
  const [symbol, setSymbol] = useState<string>('')
  const router = useRouter()
  const { address } = router.query

  useEffect(() => {
    const addressString: string = address as string
    setWalletAddress(addressString)

    const fetchProvider = async () => {
      const provider = (await detectEthereumProvider()) as any
      setProvider(provider)
      if (provider.chainId === '0x635ae020') {
        setConnection('You are connected to  Harmony Devnet.')
        setSymbol('ONE')
      } else if (provider.chainId === '0x89') {
        setConnection('You are connected to  Polygon Mainnet.')
        setSymbol('MATIC')
      } else if (provider.chainId === '0xa') {
        setConnection('You are connected to  Optimism Mainnet.')
        setSymbol('Ξ')
      } else {
        setConnection(
          'Please connect to Polygon-, Optimism mainnet or Harmony Devnet!',
        )
        setSymbol('Ξ')
      }

      await provider.request({ method: 'eth_requestAccounts' })

      const ethersProvider = new ethers.providers.Web3Provider(provider)

      const signerData = ethersProvider.getSigner()
      setSigner(signerData)
      const newSignerAddress: string = (await signerData.getAddress()) as string
      setSignerAddress(newSignerAddress)

      const etherServiceFacetInstance: any = await new Contract(
        walletAddress,
        IEtherServiceFacetAbi.abi,
        signer,
      )
      const etherBalance = await etherServiceFacetInstance.getEtherBalance()
      setWalletBalance(parseBalance(etherBalance))
    }


    fetchProvider().catch(console.error)
  }, [address, walletAddress, signer, signerAddress, provider])

  useEffect(() => {
    const addressString: string = address as string
    setWalletAddress(addressString)
  }, [address])

  // form validation rules
  const validationSchema = Yup.object().shape({
    toAddress: Yup.string()
      .length(42, 'Address must be 42 characters long')
      .required('toAddress is required'),
    amount: Yup.number()
      .required('amount is required')
      .positive('amount must be positive'),
  })

  const formOptions = {
    resolver: yupResolver(validationSchema),
  }

  const { handleSubmit, register, formState } = useForm<UserInput>(formOptions)
  const { errors } = formState

  const onSubmitHandler = (input: UserInput) => {
    sendEth(input.toAddress, input.amount)
  }
  async function sendEth(toAddress: string, amount: number) {
    const instance: any = await new Contract(
      walletAddress,
      IEtherServiceFacetAbi.abi,
      signer,
    )
    try {
      setLogs(`Sending ${symbol} to ${toAddress}...`)
      const tx = await instance.transferEther(
        toAddress,
        utils.parseEther(amount.toString()),
      )
      const receipt = await tx.wait()
      console.log(receipt)
      setLogs(`${symbol} succesfully sent to ${toAddress}...`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <CutomHead />
      <main className={styles.main}>
        <h1 className={styles.title}>Wallet</h1>
        <div className={styles.logs}>{logs}</div>
        <br />
        <br />
        <div>Your wallet: {walletAddress}</div>
        <h3>
          balance: {symbol} {walletBalance}
        </h3>

        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <TextField
                type="text"
                placeholder="To address"
                id="toAddress"
                {...register('toAddress')}
              >
                className=
                {`form-control ${errors.toAddress ? 'is-invalid' : ''}`}
              </TextField>
              <div className={styles.invalid}>{errors.toAddress?.message}</div>
              <TextField
                type="float"
                placeholder="Amount to send"
                {...register('amount')}
              >
                className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
              </TextField>
              <div className={styles.invalid}>{errors.amount?.message}</div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send {symbol}
              </Button>
            </form>
            <div className={styles.connection}>{connection}</div>
          </Container>
        </ThemeProvider>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon />{' '}
                <Link href={walletAddress + '/addSemaphoreGroups'}>
                  Add semaphore groups
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon />{' '}
                <Link href={walletAddress + '/addGuardians'}>
                  Add guardians
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon />{' '}
                <Link href={walletAddress + '/acceptOwnership'}>
                  Accept ownership
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddModeratorIcon />{' '}
                <Link href={walletAddress + '/transferOwnership'}>
                  Transfer ownership
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddBoxIcon />{' '}
                <Link href={walletAddress + '/erc20/'}>Send/Receive ERC20</Link>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddBoxIcon />{' '}
                <Link href={walletAddress + '/erc721/'}>
                  Send/Receive ERC721
                </Link>
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
        <div hidden>
          {provider}
          {signerAddress}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Wallet
