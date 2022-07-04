import ERC20ServiceAbi from "../../contracts/token/ERC20/ERC20Service.sol/ERC20Service.json";
import { IERC20Service } from "../../typechain-types";
import useContract from "./useContracts";

export default function useERC20ServiceContract(diamondAddress?: string | any) {
  return useContract<IERC20Service>(diamondAddress, ERC20ServiceAbi);
}
