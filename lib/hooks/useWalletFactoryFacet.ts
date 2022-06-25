import { WalletFactoryDiamond } from "../../typechain-types";
import WalletFactoryDiamond_ABI from "../../contracts/facets/WalletFactoryFacet.sol/WalletFactoryFacet.json";
import useContract from "./useContract";

export default function useWalletFactoryFacet(
  contractAddress?: string | undefined | null
) {
  return useContract<WalletFactoryDiamond>(
    contractAddress,
    WalletFactoryDiamond_ABI
  );
}
