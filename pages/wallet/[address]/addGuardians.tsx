import detectEthereumProvider from '@metamask/detect-provider'
import { BigNumber, Contract, providers } from 'ethers'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  CssBaseline,
  Container,
  InputLabel,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  OutlinedInput,
  MenuItem,
  Paper,
} from '@mui/material'

import Select, { SelectChangeEvent } from '@mui/material/Select'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import BackToWallet from '../../component/BackToWallet'
import CutomHead from '../../component/Head'
import Footer from '../../component/Footer'

import GuardianFacetAbi from '../../../contracts/guardian/GuardianFacet.sol/GuardianFacet.json'
import { Guardians } from '../../../types'

const theme = createTheme()
import styles from '../../../styles/Home.module.css'

export interface IndexProps {
  guardians: Guardians[]
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const groupId = 1

const Guardians = ({ guardians }: IndexProps) => {
  const [logs, setLogs] = React.useState('')
  const [connection, setConnection] = useState('')
  const [provider, setProvider] = useState<any>()
  const [signer, setSigner] = useState<providers.JsonRpcSigner>()
  const [signerAddress, setSignerAddress] = useState<string>('')
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [inputGuardians, setInputGuardians] = useState<string[]>([])
  const [guardiansData, setGuardiansData] = useState<Guardians[]>([])
  const [guardiansFetched, setGuardiansFetched] = useState(false)
  const router = useRouter()
  const { address } = router.query

  useEffect(() => {
    if (!guardians) {
      guardians = []
    } else {
      setGuardiansFetched(true)
      setGuardiansData(guardians)
    }
  }, [guardians])

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

  const { handleSubmit, register } = useForm()

  const handleChange = (event: SelectChangeEvent<typeof inputGuardians>) => {
    const {
      target: { value },
    } = event
    setInputGuardians(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  const onSubmitHandler = (input: any) => {
    addGuardians(input)
  }
  async function addGuardians(input: any) {
    const identityCommitments: BigNumber[] = []
    for (let i = 0; i < input.guardians.length; i++) {
      console.log('input', input.guardians[i])
      const id: string = input.guardians[i]
      const response = await fetch('/api/guardians-id', {
        method: 'POST',
        body: JSON.stringify({
          id,
        }),
      })

      if (response.status === 500) {
        const errorMessage = await response.text()

        setLogs(errorMessage)
      } else {
        const data = await response.json()
        console.log('data', data)
        if (data.identityCommitment) {
          identityCommitments.push(
            BigNumber.from(BigInt(data.identityCommitment)),
          )
        }
      }
    }
    setLogs('Adding guardians to your Wallet...')
    const guardianIntance: any = await new Contract(
      walletAddress,
      GuardianFacetAbi.abi,
      signer,
    )
    console.log('guardians', await guardianIntance.getGuardians(1))
    try {
      const tx = await guardianIntance.addGuardians(
        groupId,
        identityCommitments,
      )

      console.log('receipt', await tx.wait())
      setLogs('Guardians added successfully!')
    } catch (error) {
      setLogs('You are not able to add guardian, see console for more info')
      console.log('error', error)
    }
  }

  return (
    <div className={styles.container}>
      <CutomHead />
      <main className={styles.main}>
        <h1 className={styles.title}>Add guardians</h1>
        <div>Your wallet: {address}</div>
        <div className={styles.logs}>{logs}</div>
        <h3>List of Guardians:</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">#ID</TableCell>
                <TableCell align="right">Registration number</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guardiansFetched &&
                guardians.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.registrationNumber}
                    </TableCell>
                    <TableCell align="right">{row.displayName}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                    <TableCell align="right">{row.country}</TableCell>
                    <TableCell align="right">{row.website}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
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
                <InputLabel id="demo-simple-select-label">
                  Select at least 3 guardians
                </InputLabel>
                <Select
                  labelId="guardian"
                  id="id"
                  multiple
                  {...register('guardians')}
                  value={inputGuardians}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {guardiansFetched &&
                    guardians.map((guardian: Guardians) => (
                      <MenuItem key={guardian.id} value={guardian.id}>
                        <ListItemText primary={guardian.displayName} />
                      </MenuItem>
                    ))}
                </Select>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add guardians
                </Button>
              </form>
              <div className={styles.connection}>{connection}</div>
            </Box>
            <BackToWallet walletAddress={walletAddress} />
          </Container>
        </ThemeProvider>
        <div hidden>
          {provider} {signerAddress}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  let data: any = {}
  const body = {
    username: process.env.DAPP_USERNAME as string,
    password: process.env.DAPP_PASSWORD as string,
  }

  const url = `${process.env.GUARDIAN_SERVICE}${process.env.AUTH_LOGIN_URI}`
  // get token
  const response = await fetch(url, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  const token = await response.json()

  if (token.access_token) {
    const access_token: any = token.access_token

    const GUARDIANS_URL = `${process.env.GUARDIAN_SERVICE}${process.env.GUARDIANS_URI}`

    const result = await fetch(GUARDIANS_URL, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer ' + access_token,
      }),
    })
    data = await result.json()
  }

  return {
    props: {
      guardians: data,
    },
  }
}

export default Guardians
