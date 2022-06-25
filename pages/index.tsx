import { useWeb3React } from "@web3-react/core";
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css'
import Account from "./components/Account";
import useEagerConnect from "./hooks/useEagerConnect";
import ETHBalance from "./components/ETHBalance";
import CreateWallet from "./components/CreateWallet";

const WALLET_FACTORY_DIAMOND_ADDRESS = "0xB51049AffFA9C2DF44654BACC65A9aF45013a027";

const Home: NextPage = () => {
  const [hashId, setHashId] = useState(randomNumberInRange(1, 10000000));

  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

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
        <Account triedToEagerConnect={triedToEagerConnect} />

        {isConnected && (
          <section>
           <ETHBalance symbol="ONE"  />

           Your generated hashId =  {hashId}
           
           <CreateWallet hashId={hashId.toString()} factoryContractAddress={WALLET_FACTORY_DIAMOND_ADDRESS} />

          </section>
        )}

       
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
      </footer>
    </div>
  )
}

export default Home
