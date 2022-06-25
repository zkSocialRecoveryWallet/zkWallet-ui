import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useETHBalance from "../hooks/useETHBalance";
import { parseBalance } from "../utils/util";

type ETHBalanceProps = {
  symbol: string;
};

const ETHBalance = ({symbol}: ETHBalanceProps) => {
  const { account } = useWeb3React<Web3Provider>();
  const { data } = useETHBalance(account);

  return <p>{`${symbol} Balance`}: {parseBalance(data ?? 0)}</p>;
};

export default ETHBalance;