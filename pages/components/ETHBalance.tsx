import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useETHBalance from "../../lib/hooks/useETHBalance";
import { parseBalance } from "../../lib/utils/util";

type ETHBalanceProps = {
  symbol: string;
};

const ETHBalance = ({symbol}: ETHBalanceProps) => {
  const { account } = useWeb3React<Web3Provider>();

  let newAccount: string | undefined;
  if (account) {
    newAccount = account;
  } else {
    newAccount = "";
  }

  const { data } = useETHBalance(newAccount);

  return <p>{`${symbol} Balance`}: {parseBalance(data ?? 0)}</p>;
};

export default ETHBalance;