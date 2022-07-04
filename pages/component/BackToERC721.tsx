import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Box from "@mui/material/Box";
import Link from '@mui/material/Link';

export interface CustomBackToERC721Prop {
  walletAddress: any | string;
}

const BackToERC721 = (prop: CustomBackToERC721Prop) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <AccountBalanceWalletIcon />
      <Link href={"/wallet/" +prop.walletAddress +"/erc721"}>Back to ERC721</Link>
    </Box>
  );
};

export default BackToERC721;