import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";


const zkWallet = ({ contractAddress }: any) => {
  const { account } = useWeb3React<Web3Provider>();

  return (
    <p>
      <h1>test</h1>
    </p>
  );
};

export default zkWallet;