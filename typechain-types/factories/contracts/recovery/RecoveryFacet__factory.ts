/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RecoveryFacet,
  RecoveryFacetInterface,
} from "../../../contracts/recovery/RecoveryFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "hashId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "effectiveTime",
        type: "uint256",
      },
    ],
    name: "GuardianAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "hashId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "effectiveTime",
        type: "uint256",
      },
    ],
    name: "GuardianRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
    ],
    name: "NullifierHashAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "signal",
        type: "bytes32",
      },
    ],
    name: "ProofVerified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum IRecoveryInternal.RecoveryStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "majority",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nominee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "counter",
        type: "uint8",
      },
    ],
    name: "RecoveryUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "getMajority",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecoveryCounter",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecoveryNominee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecoveryStatus",
    outputs: [
      {
        internalType: "enum IRecoveryInternal.RecoveryStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "signal",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "externalNullifier",
        type: "uint256",
      },
      {
        internalType: "uint256[8]",
        name: "proof",
        type: "uint256[8]",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "recover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "recoveryFacetVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "resetRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ec0806100206000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c8063124f8d9c146100725780632e0c20ff146100905780634fcdd5161461009a578063a9e41ab4146100ad578063f0211581146100c2578063f79c8b77146100d8578063fca46d26146100f2575b600080fd5b61007a61011f565b6040516100879190610c2a565b60405180910390f35b61009861012e565b005b6100986100a8366004610c38565b610140565b6100b5610286565b6040516100879190610ca7565b6100ca610290565b604051908152602001610087565b6100e061029a565b60405160ff9091168152602001610087565b604080518082018252600b81526a302e312e302e616c70686160a81b602082015290516100879190610cbb565b60006101296102a4565b905090565b6101366102c3565b61013e61033c565b565b600061014c60006103ce565b80519091508061019c5760405162461bcd60e51b81526020600482015260166024820152755265636f766572793a204e4f5f475541524449414e5360501b60448201526064015b60405180910390fd5b60006101ac600183811c90610d26565b90506101b88185610519565b6101c58989898989610695565b887f102229041138505f4cecdadc8e3ac1cd92c55870c17371050fc00bdb08889801896040516101f791815260200190565b60405180910390a26102098185610742565b610217600183811c90610d26565b61021f610821565b60020154600160a01b900460ff160361027b5761023c8185610845565b7f5e06a4da1c258ba9bc6142ca9e5b6dfa64e57f7fc4e91a150ba0b3fd301587a08460405161026b9190610ca7565b60405180910390a161027b61033c565b505050505050505050565b6000610129610883565b600061012961089f565b60006101296108b2565b60006102ae610821565b5460ff16600381111561012957610129610bf2565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460546001600160a01b0316331461013e5760405162461bcd60e51b815260206004820152601d60248201527f4f776e61626c653a2073656e646572206d757374206265206f776e65720000006044820152606401610193565b61035c60005b61034a610821565b90815460ff191660ff91909116179055565b61036f6000610369610821565b60010155565b61039f600061037c610821565b60020180546001600160a01b0319166001600160a01b0392909216919091179055565b61013e60006103ac610821565b600201805460ff60a01b1916600160a01b60ff90931692909202919091179055565b606060006103da6108cf565b600101546001600160401b038111156103f5576103f5610d3e565b60405190808252806020026020018201604052801561044057816020015b60408051606081018252600080825260208083018290529282015282526000199092019101816104135790505b5090506000805b61044f6108cf565b600101548110156105105760006104646108cf565b600101828154811061047857610478610d54565b600091825260209182902060408051606081018252600293909302909101805483526001015460ff8116938301939093526101009092046001600160401b03169181019190915290506104cb81876108f3565b156104fd57808484815181106104e3576104e3610d54565b602002602001018190525082806104f990610d6a565b9350505b508061050881610d6a565b915050610447565b50909392505050565b600082116105635760405162461bcd60e51b81526020600482015260176024820152765265636f766572793a205a45524f5f4d414a4f5249545960481b6044820152606401610193565b6001600160a01b0381166105b25760405162461bcd60e51b81526020600482015260166024820152755265636f766572793a205a45524f5f4e4f4d494e454560501b6044820152606401610193565b336001600160a01b0382160361061e5760405162461bcd60e51b815260206004820152602b60248201527f5265636f766572793a204e4f545f414c4c4f5745445f544f5f5245434f56455260448201526a17d3d5d397d5d05313115560aa1b6064820152608401610193565b60026106286102a4565b600381111561063957610639610bf2565b036106915760405162461bcd60e51b815260206004820152602260248201527f5265636f766572793a2052454f564552595f414c52454144595f414343455054604482015261115160f21b6064820152608401610193565b5050565b600061069f61091e565b6000878152602091909152604081206001015491506106bc61091e565b6000888152602091825260408082205460ff168083527f1fd5ae9b688ff1e92cea024147bd3c60ba20584ed7225a597f53b9dde63d587e9093529020549091506001600160a01b0316610713878488888886610942565b6107388661071f610b42565b600091825260205260409020805460ff19166001179055565b5050505050505050565b600161074c610821565b6002018054601490610769908490600160a01b900460ff16610d83565b92506101000a81548160ff021916908360ff160217905550600061078b6102a4565b905060008160038111156107a1576107a1610bf2565b0361081c576107b06001610342565b6107bc83610369610821565b6107c88261037c610821565b7f45342bb0ee6db68ec0be09a44de7b4c6c917efd1c8e575c224ba485b35a0f5ba600184846107f5610821565b6002015460405161081394939291600160a01b900460ff1690610da8565b60405180910390a15b505050565b7faf0525525908baaff0e6412b57bc60b8a792d1f6f652d81c81fcd14c5145a63090565b7f24aa1f7b31fd188a8d3ecfb06bc55c806040e59b03bd4396283442fce661789080546001600160a01b0319166001600160a01b0383161790555050565b600061088d610821565b600201546001600160a01b0316919050565b60006108a9610821565b60010154905090565b60006108bc610821565b60020154600160a01b900460ff16919050565b7f45859138d8d663d06b2ba6d2358a3e0ff977596ccb2ad702c7f89e6584675d3490565b60006108fe83610b66565b806109155750818015610915575061091583610b91565b90505b92915050565b7f18009942081384ebf013f551c6956278f8f7e6b5ba58de96a877e7d2e169e67090565b61094a610b42565b6000858152602091909152604090205460ff16156109c95760405162461bcd60e51b815260206004820152603660248201527f53656d6170686f7265436f72653a20796f752063616e6e6f7420757365207468604482015275652073616d65206e756c6c696669657220747769636560501b6064820152608401610193565b60006109d487610bbb565b9050816001600160a01b0316635fe8c13b604051806040016040528086600060088110610a0357610a03610d54565b6020020135815260200186600160088110610a2057610a20610d54565b6020020135905260408051608081018252878201359181019182529081906060820189600360200201358152508152602001604051806040016040528089600460088110610a7057610a70610d54565b6020020135815260200189600560088110610a8d57610a8d610d54565b60200201359052905260408051808201909152808860066020020135815260200188600760088110610ac157610ac1610d54565b602002013581525060405180608001604052808c81526020018b81526020018781526020018a8152506040518563ffffffff1660e01b8152600401610b099493929190610e06565b60006040518083038186803b158015610b2157600080fd5b505afa158015610b35573d6000803e3d6000fd5b5050505050505050505050565b7f2e80343f7be649afb4507a40421854eda29bc956f126850e8d1f99d3fcc3131e90565b602081015160009060ff16600114801561091857505060400151426001600160401b03909116111590565b602081015160009060ff16600114801561091857505060400151426001600160401b039091161190565b6000600882604051602001610bd291815260200190565b60408051601f198184030181529190528051602090910120901c92915050565b634e487b7160e01b600052602160045260246000fd5b60048110610c2657634e487b7160e01b600052602160045260246000fd5b9052565b602081016109188284610c08565b6000806000806000806101a08789031215610c5257600080fd5b86359550602087013594506040870135935060608701359250610180870188811115610c7d57600080fd5b608088019250356001600160a01b0381168114610c9957600080fd5b809150509295509295509295565b6001600160a01b0391909116815260200190565b600060208083528351808285015260005b81811015610ce857858101830151858201604001528201610ccc565b81811115610cfa576000604083870101525b50601f01601f1916929092016040019392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610d3957610d39610d10565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600060018201610d7c57610d7c610d10565b5060010190565b600060ff821660ff84168060ff03821115610da057610da0610d10565b019392505050565b60808101610db68287610c08565b60208201949094526001600160a01b0392909216604083015260ff16606090910152919050565b8060005b6002811015610e00578151845260209384019390910190600101610de1565b50505050565b6101808101610e158287610ddd565b60408083018660005b6002811015610e4557610e32838351610ddd565b9183019160209190910190600101610e1e565b50505050610e5660c0830185610ddd565b61010082018360005b6004811015610e7e578151835260209283019290910190600101610e5f565b5050509594505050505056fea26469706673582212200d0c1b31ce494c837f5506632d8b99f00da270bbfee50153853e9106ea33c7d964736f6c634300080e0033";

type RecoveryFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RecoveryFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RecoveryFacet__factory extends ContractFactory {
  constructor(...args: RecoveryFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RecoveryFacet> {
    return super.deploy(overrides || {}) as Promise<RecoveryFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RecoveryFacet {
    return super.attach(address) as RecoveryFacet;
  }
  override connect(signer: Signer): RecoveryFacet__factory {
    return super.connect(signer) as RecoveryFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RecoveryFacetInterface {
    return new utils.Interface(_abi) as RecoveryFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RecoveryFacet {
    return new Contract(address, _abi, signerOrProvider) as RecoveryFacet;
  }
}
