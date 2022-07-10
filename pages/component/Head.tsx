import React from 'react'
import Head from 'next/head'

const CutomHead = () => {
  return (
    <Head>
      <title>zkSocialRecovery Wallet</title>
      <meta
        name="description"
        content="zk-SocialRecovery Wallet is a smart contract wallet using zk-SNARKS to restore a user's access to their smart contract wallet, without revealing any information of the user's and guardians."
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default CutomHead
