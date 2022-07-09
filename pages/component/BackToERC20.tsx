import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

export interface CustomBackToERC20Prop {
  walletAddress: any | string
}

const BackToERC20 = (prop: CustomBackToERC20Prop) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <AccountBalanceWalletIcon />
      <Link href={'/wallet/' + prop.walletAddress + '/erc20'}>
        Back to ERC20
      </Link>
    </Box>
  )
}

export default BackToERC20
