/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface SemaphoreGroupsBaseInterface extends utils.Interface {
  functions: {
    "addMember(uint256,uint256)": FunctionFragment;
    "addMembers(uint256,uint256[])": FunctionFragment;
    "createGroup(uint256,uint8,uint256,address)": FunctionFragment;
    "getDepth(uint256)": FunctionFragment;
    "getGroupAdmin(uint256)": FunctionFragment;
    "getNumberOfLeaves(uint256)": FunctionFragment;
    "getRoot(uint256)": FunctionFragment;
    "removeMember(uint256,uint256,uint256[],uint8[])": FunctionFragment;
    "updateGroupAdmin(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addMember"
      | "addMember(uint256,uint256)"
      | "addMembers"
      | "addMembers(uint256,uint256[])"
      | "createGroup"
      | "createGroup(uint256,uint8,uint256,address)"
      | "getDepth"
      | "getDepth(uint256)"
      | "getGroupAdmin"
      | "getGroupAdmin(uint256)"
      | "getNumberOfLeaves"
      | "getNumberOfLeaves(uint256)"
      | "getRoot"
      | "getRoot(uint256)"
      | "removeMember"
      | "removeMember(uint256,uint256,uint256[],uint8[])"
      | "updateGroupAdmin"
      | "updateGroupAdmin(uint256,address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addMember",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addMember(uint256,uint256)",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addMembers",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addMembers(uint256,uint256[])",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createGroup",
    values: [BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createGroup(uint256,uint8,uint256,address)",
    values: [BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepth(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGroupAdmin",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGroupAdmin(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfLeaves",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfLeaves(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoot(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMember",
    values: [BigNumberish, BigNumberish, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMember(uint256,uint256,uint256[],uint8[])",
    values: [BigNumberish, BigNumberish, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGroupAdmin",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGroupAdmin(uint256,address)",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addMember(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addMembers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addMembers(uint256,uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createGroup(uint256,uint8,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDepth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDepth(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGroupAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGroupAdmin(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfLeaves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfLeaves(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoot(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMember(uint256,uint256,uint256[],uint8[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGroupAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGroupAdmin(uint256,address)",
    data: BytesLike
  ): Result;

  events: {
    "GroupAdminUpdated(uint256,address,address)": EventFragment;
    "GroupCreated(uint256,uint8,uint256)": EventFragment;
    "LeafInserted(uint256,uint256,uint256)": EventFragment;
    "LeafRemoved(uint256,uint256,uint256)": EventFragment;
    "MemberAdded(uint256,uint256,uint256)": EventFragment;
    "MemberRemoved(uint256,uint256,uint256)": EventFragment;
    "TreeCreated(uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GroupAdminUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GroupAdminUpdated(uint256,address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GroupCreated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GroupCreated(uint256,uint8,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LeafInserted"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LeafInserted(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LeafRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LeafRemoved(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MemberAdded(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MemberRemoved(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreeCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreeCreated(uint256,uint8)"): EventFragment;
}

export interface GroupAdminUpdatedEventObject {
  groupId: BigNumber;
  oldAdmin: string;
  newAdmin: string;
}
export type GroupAdminUpdatedEvent = TypedEvent<
  [BigNumber, string, string],
  GroupAdminUpdatedEventObject
>;

export type GroupAdminUpdatedEventFilter =
  TypedEventFilter<GroupAdminUpdatedEvent>;

export interface GroupCreatedEventObject {
  groupId: BigNumber;
  depth: number;
  zeroValue: BigNumber;
}
export type GroupCreatedEvent = TypedEvent<
  [BigNumber, number, BigNumber],
  GroupCreatedEventObject
>;

export type GroupCreatedEventFilter = TypedEventFilter<GroupCreatedEvent>;

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

export interface MemberAddedEventObject {
  groupId: BigNumber;
  identityCommitment: BigNumber;
  root: BigNumber;
}
export type MemberAddedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  MemberAddedEventObject
>;

export type MemberAddedEventFilter = TypedEventFilter<MemberAddedEvent>;

export interface MemberRemovedEventObject {
  groupId: BigNumber;
  identityCommitment: BigNumber;
  root: BigNumber;
}
export type MemberRemovedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  MemberRemovedEventObject
>;

export type MemberRemovedEventFilter = TypedEventFilter<MemberRemovedEvent>;

export interface TreeCreatedEventObject {
  id: BigNumber;
  depth: number;
}
export type TreeCreatedEvent = TypedEvent<
  [BigNumber, number],
  TreeCreatedEventObject
>;

export type TreeCreatedEventFilter = TypedEventFilter<TreeCreatedEvent>;

export interface SemaphoreGroupsBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SemaphoreGroupsBaseInterface;

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
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addMember(uint256,uint256)"(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addMembers(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addMembers(uint256,uint256[])"(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createGroup(uint256,uint8,uint256,address)"(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "getDepth(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getGroupAdmin(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getGroupAdmin(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getNumberOfLeaves(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getRoot(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeMember(uint256,uint256,uint256[],uint8[])"(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateGroupAdmin(uint256,address)"(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addMember(
    groupId: BigNumberish,
    identityCommitment: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addMember(uint256,uint256)"(
    groupId: BigNumberish,
    identityCommitment: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addMembers(
    groupId: BigNumberish,
    identityCommitments: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addMembers(uint256,uint256[])"(
    groupId: BigNumberish,
    identityCommitments: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createGroup(
    groupId: BigNumberish,
    depth: BigNumberish,
    zeroValue: BigNumberish,
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createGroup(uint256,uint8,uint256,address)"(
    groupId: BigNumberish,
    depth: BigNumberish,
    zeroValue: BigNumberish,
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDepth(groupId: BigNumberish, overrides?: CallOverrides): Promise<number>;

  "getDepth(uint256)"(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getGroupAdmin(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getGroupAdmin(uint256)"(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getNumberOfLeaves(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getNumberOfLeaves(uint256)"(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoot(groupId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "getRoot(uint256)"(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeMember(
    groupId: BigNumberish,
    identityCommitment: BigNumberish,
    proofSiblings: BigNumberish[],
    proofPathIndices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeMember(uint256,uint256,uint256[],uint8[])"(
    groupId: BigNumberish,
    identityCommitment: BigNumberish,
    proofSiblings: BigNumberish[],
    proofPathIndices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateGroupAdmin(
    groupId: BigNumberish,
    newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateGroupAdmin(uint256,address)"(
    groupId: BigNumberish,
    newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addMember(uint256,uint256)"(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addMembers(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "addMembers(uint256,uint256[])"(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "createGroup(uint256,uint8,uint256,address)"(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getDepth(groupId: BigNumberish, overrides?: CallOverrides): Promise<number>;

    "getDepth(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getGroupAdmin(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getGroupAdmin(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNumberOfLeaves(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoot(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "removeMember(uint256,uint256,uint256[],uint8[])"(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateGroupAdmin(uint256,address)"(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GroupAdminUpdated(uint256,address,address)"(
      groupId?: BigNumberish | null,
      oldAdmin?: string | null,
      newAdmin?: string | null
    ): GroupAdminUpdatedEventFilter;
    GroupAdminUpdated(
      groupId?: BigNumberish | null,
      oldAdmin?: string | null,
      newAdmin?: string | null
    ): GroupAdminUpdatedEventFilter;

    "GroupCreated(uint256,uint8,uint256)"(
      groupId?: BigNumberish | null,
      depth?: null,
      zeroValue?: null
    ): GroupCreatedEventFilter;
    GroupCreated(
      groupId?: BigNumberish | null,
      depth?: null,
      zeroValue?: null
    ): GroupCreatedEventFilter;

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

    "MemberAdded(uint256,uint256,uint256)"(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberAddedEventFilter;
    MemberAdded(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberAddedEventFilter;

    "MemberRemoved(uint256,uint256,uint256)"(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberRemovedEventFilter;
    MemberRemoved(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberRemovedEventFilter;

    "TreeCreated(uint256,uint8)"(
      id?: null,
      depth?: null
    ): TreeCreatedEventFilter;
    TreeCreated(id?: null, depth?: null): TreeCreatedEventFilter;
  };

  estimateGas: {
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addMember(uint256,uint256)"(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addMembers(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addMembers(uint256,uint256[])"(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createGroup(uint256,uint8,uint256,address)"(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDepth(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGroupAdmin(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGroupAdmin(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNumberOfLeaves(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoot(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeMember(uint256,uint256,uint256[],uint8[])"(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateGroupAdmin(uint256,address)"(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addMember(uint256,uint256)"(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addMembers(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addMembers(uint256,uint256[])"(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createGroup(uint256,uint8,uint256,address)"(
      groupId: BigNumberish,
      depth: BigNumberish,
      zeroValue: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDepth(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGroupAdmin(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGroupAdmin(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNumberOfLeaves(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoot(uint256)"(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeMember(uint256,uint256,uint256[],uint8[])"(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateGroupAdmin(uint256,address)"(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}