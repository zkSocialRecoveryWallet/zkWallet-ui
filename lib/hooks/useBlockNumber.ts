import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";

function getBlockNumber(library: Web3Provider) {
  return async () => {
    return library.getBlockNumber();
  };
}

export default function useBlockNumber() {
  const { library } = useWeb3React<Web3Provider>();
  const shouldFetch = !!library;

  let newLibrary: Web3Provider;
  if (library) {
    newLibrary = library;
  } else {
    newLibrary = new JsonRpcProvider("http://localhost:8545");
  }

  return useSWR(
    shouldFetch ? ["BlockNumber"] : null,
    getBlockNumber(newLibrary),
    {
      refreshInterval: 10 * 1000,
    }
  );
}
