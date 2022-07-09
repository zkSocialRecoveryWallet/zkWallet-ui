import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

export interface CustomBackToWalletProp {
  walletAddress: any | string
}

const BackToWallet = (prop: CustomBackToWalletProp) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <AccountBalanceWalletIcon />
      <Link href={'/wallet/' + prop.walletAddress}>Back to wallet</Link>
    </Box>
  )
}

export default BackToWallet
