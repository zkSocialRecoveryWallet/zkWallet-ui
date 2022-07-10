import detectEthereumProvider from '@metamask/detect-provider'
import { Contract, providers, utils } from 'ethers'
import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

import { Avatar, Button, Box, CssBaseline, Container } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import CutomHead from './component/Head'
import Footer from './component/Footer'

import WalletFactoryFacetAbi from '../contracts/facets/WalletFactoryFacet.sol/WalletFactoryFacet.json'
import SemaphoreGroupsFacetAbi from '../contracts/semaphore/SemaphoreGroupsFacet.sol/SemaphoreGroupsFacet.json'
import { ISemaphoreGroupsFacet, IWalletFactoryFacet } from '../typechain-types'
import { Verifier } from '../types'

const theme = createTheme()
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [logs, setLogs] = React.useState(
    'Connect your wallet to create a new wallet!',
  )
  const [connection, setConnection] = useState('')
  const [cookies, setCookies] = useCookies(['WALLET_ADDRESSES'])
  const [counter, setCounter] = useState(0)
  const [latestWalletAddress, setLatestWalletAddress] = useState<string>('')
  const [provider, setProvider] = useState<any>()
  const [signer, setSigner] = useState<providers.JsonRpcSigner | any>()
  const [signerAddress, setSignerAddress] = useState<string>('')
  const [stateSemaphoreGroup, setStateSemaphoreGroup] = useState(false)
  const [walletAddresses, setWalletAddresses] = useState<string[]>([])
  const [walletCreated, setWalletCreated] = useState(false)

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
      const newSignerAddress: string = (await signerData.getAddress()) as string
      setSignerAddress(newSignerAddress)
    }
    fetchProvider().catch(console.error)
  }, [signer, signerAddress, provider])

  useEffect(() => {
    setCookies('WALLET_ADDRESSES', latestWalletAddress)
  }, [latestWalletAddress, setCookies])

  useEffect(() => {
    if (!stateSemaphoreGroup && latestWalletAddress !== '' && provider) {
      const fetchInstance = async () => {
        let walletFactory = ''
        if (provider.chainId === '0x635ae020') {
          //walletFactory = '0x1D7517e85eF2c0b6741D2c61a911c00D88f45a90'
          walletFactory = '0x60e8BE2676fCc5744F2E8bD0Dc0Bb686f413c2FE'
        } else if (provider.chainId === '0x89') {
          walletFactory = '0xaC71914E2A22f92d3F75106043aA4E7248Eda9C3'
        }
        const instance: Contract | IWalletFactoryFacet = await new Contract(
          walletFactory,
          WalletFactoryFacetAbi.abi,
          signer,
        )

        if (counter === 0) {
          instance.on('WalletIsCreated', async () => {
            setCounter(1)
            const semaphoreGroupsInstance: Contract | ISemaphoreGroupsFacet =
              await new Contract(
                latestWalletAddress,
                SemaphoreGroupsFacetAbi.abi,
                signer,
              )
            const defaultGroupId = 1

            try {
              const groupTransaction =
                await semaphoreGroupsInstance.createGroup(
                  defaultGroupId,
                  20,
                  0,
                  signerAddress,
                )
              const receiptGroup = await groupTransaction.wait()
              console.log('receiptGroup: ', receiptGroup)
              setLatestWalletAddress('')
              setStateSemaphoreGroup(true)
              setLogs('Your Wallet is ready')
            } catch (error) {
              console.log(error)
              setLogs('Unable to add Semaphore group to your wallet!')
            }
          })
        }
      }
      // call the function
      fetchInstance()
        // make sure to catch any error
        .catch(console.error)
    }
  }, [latestWalletAddress, stateSemaphoreGroup])

  const { handleSubmit } = useForm()

  const onSubmitHandler = () => {
    const newHashId = randomNumberInRange(1, 10000000)
    createWallet(newHashId)
  }

  async function createWallet(hashId: number) {
    setLogs('Creating your Wallet...')

    let verifiers: Verifier[] = []
    let version: string

    const depth = Number(20)

    let verifier20Address = ''
    let walletFactory = ''

    if (provider.chainId === '0x635ae020') {
      //verifier20Address = '0xE01438D4149F180DC67a0f039C426a4B45E75fE6'
      //walletFactory = '0x1D7517e85eF2c0b6741D2c61a911c00D88f45a90'
      verifier20Address = '0x53c6fC6E9B7D4A765222F1732b1490462B5d16aB'
      walletFactory = '0x60e8BE2676fCc5744F2E8bD0Dc0Bb686f413c2FE'
    } else if (provider.chainId === '0x89') {
      verifier20Address = '0x1A51d1C41be8a8A8F3092C65Ca0c3a0777a65f06'
      walletFactory = '0xaC71914E2A22f92d3F75106043aA4E7248Eda9C3'
    } else {
      console.log('provider.chainId', provider.chainId)
      setConnection(
        'Please connect to Polygon-, Optimism mainnet or Harmony Devnet!',
      )
    }

    const instance: Contract | IWalletFactoryFacet = await new Contract(
      walletFactory,
      WalletFactoryFacetAbi.abi,
      signer,
    )

    //check if contract is callable
    try {
      version = await instance.walletFactoryFacetVersion()
      if (version === '0.1.0.alpha') {
        try {
          setLogs('Creating your wallet...')

          verifiers = [
            { merkleTreeDepth: depth, contractAddress: verifier20Address },
          ]

          const trx = await instance.createWallet(
            utils.formatBytes32String(hashId.toString()),
            signerAddress,
            verifiers,
          )
          const txEvent = await trx.wait()
          if (txEvent.events) {
            const event = txEvent.events[0]
            const newWalletAddress = event.address

            setLogs(`Your wallet address: ${newWalletAddress}`)
            if (!walletAddresses) {
              setWalletAddresses(newWalletAddress)
            } else {
              setWalletAddresses([...walletAddresses, newWalletAddress])
            }
            setCookies('WALLET_ADDRESSES', [
              ...walletAddresses,
              newWalletAddress,
            ])
            setLatestWalletAddress(newWalletAddress)
            setLogs(`Your wallet is created: ${newWalletAddress}`)
            setStateSemaphoreGroup(false)
            setCounter(0)
            setWalletCreated(true)

            setLogs('Adding Semaphore Group to your wallet...')
          } else {
            setLogs('NewDiamondWallet event not found!')
          }
        } catch (createWalletError) {
          setLogs('Error creating your wallet. Please try again.')
        }
      } else {
        console.log(cookies)
        setLogs(
          `The Wallet Facory: ${process.env.NEXT_PUBLIC_FACTORY_DIAMOND_ADDRESS}  is not supported by this dApp!`,
        )
      }
    } catch (error) {
      setLogs(`Non a WalletFactoryFacet contract`)
      console.log(error)
    }
  }

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  if (!provider) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <CutomHead />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to zkWallet by Simplicy</h1>
        <div className={styles.logs}>{logs}</div>
        <br />
        <br />
        <div className={styles.logs}>Your wallets</div>
        {walletCreated &&
          walletAddresses.map((element, index) => {
            return (
              <div key={index}>
                <u>
                  <a href={'/wallet/' + element}>{element}</a>
                </u>
              </div>
            )
          })}

        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <AccountBalanceWalletIcon />
              </Avatar>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
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
      <Footer />
    </div>
  )
}

export default Home
