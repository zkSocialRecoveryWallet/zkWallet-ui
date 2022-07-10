import detectEthereumProvider from '@metamask/detect-provider'
import { Contract, providers } from 'ethers'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { Box, Button, CssBaseline, Container } from '@mui/material'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import BackToWallet from '../../component/BackToWallet'
import CutomHead from '../../component/Head'
import Footer from '../../component/Footer'

import SemaphoreGroupsFacetAbi from '../../../contracts/semaphore/SemaphoreGroupsFacet.sol/SemaphoreGroupsFacet.json'

import { ISemaphoreGroupsFacet } from '../../../typechain-types'

const theme = createTheme()
import styles from '../../../styles/Home.module.css'

const SemaphoreGroups = () => {
  const [logs, setLogs] = React.useState('')
  const [connection, setConnection] = useState('')
  const [provider, setProvider] = useState<any>()
  const [signer, setSigner] = useState<providers.JsonRpcSigner>()
  const [signerAddress, setSignerAddress] = useState<string>('')
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [stateSemaphoreGroup, setStateSemaphoreGroup] = useState(false)
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
      const newSignerAddress: string = (await signerData.getAddress()) as string
      setSignerAddress(newSignerAddress)
    }

    // call the function
    fetchProvider()
      // make sure to catch any error
      .catch(console.error)
  }, [address, walletAddress, signer, signerAddress, provider])

  useEffect(() => {
    const addressString: string = address as string
    setWalletAddress(addressString)
  }, [address])

  const { handleSubmit } = useForm()

  const onSubmitHandler = () => {
    addSemaphoreGroups()
  }
  async function addSemaphoreGroups() {
    const semaphoreGroupsInstance: Contract | ISemaphoreGroupsFacet =
      await new Contract(walletAddress, SemaphoreGroupsFacetAbi.abi, signer)
    const defaultGroupId = 1
    try {
      const groupTransaction = await semaphoreGroupsInstance.createGroup(
        defaultGroupId,
        20,
        0,
        signerAddress,
      )
      const receiptGroup = await groupTransaction.wait()
      console.log('receiptGroup: ', receiptGroup)
      setStateSemaphoreGroup(true)
      setLogs('Your Wallet is ready')
    } catch (error) {
      console.log(error)
      setLogs('Unable to add Semaphore group to your wallet!')
    }
  }

  return (
    <div className={styles.container}>
      <CutomHead />
      <main className={styles.main}>
        <h1 className={styles.title}>Create semaphore group</h1>
        <div>Your wallet: {address}</div>
        <div className={styles.logs}>{logs}</div>
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
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Semaphore Group
                </Button>
              </form>
              <div className={styles.connection}>{connection}</div>
            </Box>
            <BackToWallet walletAddress={walletAddress} />
          </Container>
        </ThemeProvider>
        <div hidden>
          {provider}
          {stateSemaphoreGroup}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SemaphoreGroups
