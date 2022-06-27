import detectEthereumProvider from "@metamask/detect-provider"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from '@mui/material/Link';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
import styles from '../styles/Home.module.css'


const WALLET_FACTORY_DIAMOND_ADDRESS = "0xB51049AffFA9C2DF44654BACC65A9aF45013a027";

const Home: NextPage = () => {
  const [hashId, setHashId] = useState(randomNumberInRange(1, 10000000));

  const { handleSubmit, register, reset, formState } = useForm()
  const { errors } = formState;

  const onSubmitHandler = (input: any) => {
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


        <div style={{ marginTop: "5em" }}>
          <div className={styles.logs}>Your Onchain data:</div>
                    {/* <TextBox value={greeting} /> */}
        </div>
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
        <Link href="https://github.com/zkSocialRecoveryWallet/zkSocialRecoveryWallet/">Github documentation</Link>
      </footer>
    </div>
  )
}

export default Home
