import useSWR from "swr";
import { WalletFactoryFacet } from "../../typechain-types";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useWalletFactoryFacet from "./useWalletFactoryFacet";

function createWallet(contract: WalletFactoryFacet) {
  return async (hashID: string, address: string) => {
    const transaction = await contract.createWallet(hashID, address);
    console.log(transaction);
    const receipt = await transaction.wait();
    console.log(receipt.events);
    let newWalletAddress;
    if (receipt.events > 0) {
      const events = receipt.events;

      newWalletAddress = events[0].address;
    }
    return newWalletAddress;
  };
}

export default function useCreateWallet(
  hashId: string,
  contractAddress: string,
  suspense = false
) {
  const contract = useWalletFactoryFacet(contractAddress);

  const shouldFetch =
    typeof hashId === "string" &&
    typeof contractAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["createWallet", hashId, contractAddress] : null,
    createWallet(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
