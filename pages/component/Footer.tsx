import React from "react";
import Image from 'next/image'
import Link from '@mui/material/Link';

import styles from '../../styles/Home.module.css'

const Footer = (prop: any) => {
  return (
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
    <Link href="https://github.com/zkWallet/zkWallet-docs">Github documentation</Link>
  </footer>
  );
};

export default Footer;