import { Contract } from "ethers";

export type DeployedContract = {
  name: string;
  contract: Contract;
  address: string;
};

export type Verifier = {
  contractAddress: string;
  merkleTreeDepth: Number;
};

export interface Guardians {
  id: string;
  registrationNumber: string;
  displayName: string;
  description: string;
  city: string;
  country: string;
  website: string;
  identityCommitment: string;
}

export interface TrackedTokens {
  tokenName: string;
  tokenSymbol: string;
  tokenAddress: string;
  balance: string;
}

export interface TrackedERC721Tokens {
  tokenName: string;
  tokenSymbol: string;
  tokenAddress: string;
  balance: string;
}
