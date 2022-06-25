import type { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

export function formatEtherscanLink(
  type: "Account" | "Transaction",
  data: [number, string]
) {
  switch (type) {
    case "Account": {
      const [chainId, address] = data;
      if (chainId === 1666900000) {
        return `https://explorer.ps.hmny.io/address/${address}`;
      } else if (chainId === 1666700000) {
        return `https://explorer.pops.one//address/${address}`;
      } else if (chainId === 1666600000) {
        return `https://explorer.harmony.one/address/${address}`;
      } else {
        return `https://etherscan.io/address/${address}`;
      }
    }
    case "Transaction": {
      const [chainId, hash] = data;

      if (chainId === 1666900000) {
        return `https://explorer.ps.hmny.io/tx/${hash}`;
      } else if (chainId === 1666700000) {
        return `https://explorer.pops.one///${hash}`;
      } else if (chainId === 1666600000) {
        return `https://explorer.harmony.one/tx/${hash}`;
      } else {
        return `https://etherscan.io/tx/${hash}`;
      }
    }
  }
}

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 3
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);
