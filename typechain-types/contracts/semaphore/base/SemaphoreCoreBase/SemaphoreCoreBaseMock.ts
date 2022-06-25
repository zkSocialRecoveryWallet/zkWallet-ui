/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export interface SemaphoreCoreBaseMockInterface extends utils.Interface {
  functions: {
    "___verifyProof(bytes32,uint256,uint256,uint256,uint256[8],address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "___verifyProof"
      | "___verifyProof(bytes32,uint256,uint256,uint256,uint256[8],address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "___verifyProof",
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "___verifyProof(bytes32,uint256,uint256,uint256,uint256[8],address)",
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      string
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "___verifyProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "___verifyProof(bytes32,uint256,uint256,uint256,uint256[8],address)",
    data: BytesLike
  ): Result;

  events: {
    "NullifierHashAdded(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NullifierHashAdded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NullifierHashAdded(uint256)"
  ): EventFragment;
}

export interface NullifierHashAddedEventObject {
  nullifierHash: BigNumber;
}
export type NullifierHashAddedEvent = TypedEvent<
  [BigNumber],
  NullifierHashAddedEventObject
>;

export type NullifierHashAddedEventFilter =
  TypedEventFilter<NullifierHashAddedEvent>;

export interface SemaphoreCoreBaseMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SemaphoreCoreBaseMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ___verifyProof(
      signal: BytesLike,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      verifier: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "___verifyProof(bytes32,uint256,uint256,uint256,uint256[8],address)"(
      signal: BytesLike,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      verifier: string,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  ___verifyProof(
    signal: BytesLike,
    root: BigNumberish,
    nullifierHash: BigNumberish,
    externalNullifier: BigNumberish,
    proof: BigNumberish[],
    verifier: string,
    overrides?: CallOverrides
  ): Promise<void>;

  "___verifyProof(bytes32,uint256,uint256,uint256,uint256[8],address)"(
    signal: BytesLike,
    root: BigNumberish,
    nullifierHash: BigNumberish,
    externalNullifier: BigNumberish,
    proof: BigNumberish[],
    verifier: string,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    ___verifyProof(
      signal: BytesLike,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      verifier: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "___verifyProof(bytes32,uint256,uint256,uint256,uint256[8],address)"(
      signal: BytesLike,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      verifier: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NullifierHashAdded(uint256)"(
      nullifierHash?: null
    ): NullifierHashAddedEventFilter;
    NullifierHashAdded(nullifierHash?: null): NullifierHashAddedEventFilter;
  };

  estimateGas: {
    ___verifyProof(
      signal: BytesLike,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      verifier: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "___verifyProof(bytes32,uint256,uint256,uint256,uint256[8],address)"(
      signal: BytesLike,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      verifier: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ___verifyProof(
      signal: BytesLike,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      verifier: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "___verifyProof(bytes32,uint256,uint256,uint256,uint256[8],address)"(
      signal: BytesLike,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      verifier: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}