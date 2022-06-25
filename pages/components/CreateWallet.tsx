import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import useCreateWallet from "../../lib/hooks/useCreateWallet";

type CreateWalletProps = {
  hashId: string;
  factoryContractAddress: string;  
};


const CreateWallet = ({ hashId, factoryContractAddress }: CreateWalletProps) => {
  const [walletAddress, setWalletAddress] = useState(false);

  const { handleSubmit, register } = useForm({
    defaultValues: {
      hashId: hashId,
      factoryContractAddress: factoryContractAddress,
    },
  });


  const onSubmitHandler = (data: any) => {
    console.log("hashId: ", data.hashId)
    console.log("factoryContractAddress: ", data.factoryContractAddress);
   
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input hidden {...register("hashId")} value={hashId} />
      <input hidden {...register("factoryContractAddress")} value={factoryContractAddress} />
      <Button variant="contained" type="submit">Create a new wallet</Button>
    </form>
  
  );
}

export default CreateWallet;