import React from 'react'
import { useETHBalance } from '../hooks/useETHBalance'
import { parseBalance } from '../../utils'

export interface CustomETHBalanceProp {
  walletAddress: any | string
}

const ETHBalance = (prop: CustomETHBalanceProp) => {
  const account = prop.walletAddress as string
  const { data } = useETHBalance(account)
  return <p>Balance ONE {parseBalance(data ?? 0)} </p>
}

export default ETHBalance
