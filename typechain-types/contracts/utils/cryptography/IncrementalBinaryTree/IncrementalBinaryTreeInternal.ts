/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  Signer,
  utils,
} from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export interface IncrementalBinaryTreeInternalInterface
  extends utils.Interface {
  functions: {};

  events: {
    "LeafInserted(uint256,uint256,uint256)": EventFragment;
    "LeafRemoved(uint256,uint256,uint256)": EventFragment;
    "TreeCreated(uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LeafInserted"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LeafInserted(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LeafRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LeafRemoved(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreeCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreeCreated(uint256,uint8)"): EventFragment;
}

export interface LeafInsertedEventObject {
  treeId: BigNumber;
  leaf: BigNumber;
  root: BigNumber;
}
export type LeafInsertedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  LeafInsertedEventObject
>;

export type LeafInsertedEventFilter = TypedEventFilter<LeafInsertedEvent>;

export interface LeafRemovedEventObject {
  treeId: BigNumber;
  leaf: BigNumber;
  root: BigNumber;
}
export type LeafRemovedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  LeafRemovedEventObject
>;

export type LeafRemovedEventFilter = TypedEventFilter<LeafRemovedEvent>;

export interface TreeCreatedEventObject {
  id: BigNumber;
  depth: number;
}
export type TreeCreatedEvent = TypedEvent<
  [BigNumber, number],
  TreeCreatedEventObject
>;

export type TreeCreatedEventFilter = TypedEventFilter<TreeCreatedEvent>;

export interface IncrementalBinaryTreeInternal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IncrementalBinaryTreeInternalInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "LeafInserted(uint256,uint256,uint256)"(
      treeId?: BigNumberish | null,
      leaf?: null,
      root?: null
    ): LeafInsertedEventFilter;
    LeafInserted(
      treeId?: BigNumberish | null,
      leaf?: null,
      root?: null
    ): LeafInsertedEventFilter;

    "LeafRemoved(uint256,uint256,uint256)"(
      treeId?: BigNumberish | null,
      leaf?: null,
      root?: null
    ): LeafRemovedEventFilter;
    LeafRemoved(
      treeId?: BigNumberish | null,
      leaf?: null,
      root?: null
    ): LeafRemovedEventFilter;

    "TreeCreated(uint256,uint8)"(
      id?: null,
      depth?: null
    ): TreeCreatedEventFilter;
    TreeCreated(id?: null, depth?: null): TreeCreatedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}