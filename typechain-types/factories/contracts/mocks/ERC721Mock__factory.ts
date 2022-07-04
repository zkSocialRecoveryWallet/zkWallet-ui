/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721Mock,
  ERC721MockInterface,
} from "../../../contracts/mocks/ERC721Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200242b3803806200242b8339810160408190526200003491620002c1565b8151829082906200004d9060009060208501906200014e565b508051620000639060019060208401906200014e565b506200007591506000905033620000a9565b620000a17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000a9565b505062000367565b6000828152600b602090815260408083206001600160a01b038516845290915290205460ff166200014a576000828152600b602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001093390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b8280546200015c906200032b565b90600052602060002090601f016020900481019282620001805760008555620001cb565b82601f106200019b57805160ff1916838001178555620001cb565b82800160010185558215620001cb579182015b82811115620001cb578251825591602001919060010190620001ae565b50620001d9929150620001dd565b5090565b5b80821115620001d95760008155600101620001de565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200021c57600080fd5b81516001600160401b0380821115620002395762000239620001f4565b604051601f8301601f19908116603f01168101908282118183101715620002645762000264620001f4565b816040528381526020925086838588010111156200028157600080fd5b600091505b83821015620002a5578582018301518183018401529082019062000286565b83821115620002b75760008385830101525b9695505050505050565b60008060408385031215620002d557600080fd5b82516001600160401b0380821115620002ed57600080fd5b620002fb868387016200020a565b935060208501519150808211156200031257600080fd5b5062000321858286016200020a565b9150509250929050565b600181811c908216806200034057607f821691505b6020821081036200036157634e487b7160e01b600052602260045260246000fd5b50919050565b6120b480620003776000396000f3fe608060405234801561001057600080fd5b50600436106101335760003560e01c806301ffc9a71461013857806306fdde0314610160578063081812fc14610175578063095ea7b3146101a057806318160ddd146101b557806323b872dd146101c7578063248a9ca3146101da5780632f2ff15d146101ed5780632f745c591461020057806336568abe1461021357806342842e0e1461022657806342966c68146102395780634f6ccce71461024c5780636352211e1461025f57806370a082311461027257806391d148541461028557806395d89b4114610298578063a217fddf146102a0578063a22cb465146102a8578063b88d4fde146102bb578063c87b56dd146102ce578063d204c45e146102e1578063d5391393146102f4578063d547741f14610309578063e985e9c51461031c575b600080fd5b61014b610146366004611a05565b61032f565b60405190151581526020015b60405180910390f35b610168610340565b6040516101579190611a7a565b610188610183366004611a8d565b6103d2565b6040516001600160a01b039091168152602001610157565b6101b36101ae366004611ac2565b6103f9565b005b6008545b604051908152602001610157565b6101b36101d5366004611aec565b610513565b6101b96101e8366004611a8d565b610545565b6101b36101fb366004611b28565b61055a565b6101b961020e366004611ac2565b610576565b6101b3610221366004611b28565b61060c565b6101b3610234366004611aec565b61068a565b6101b3610247366004611a8d565b6106a5565b6101b961025a366004611a8d565b6106d6565b61018861026d366004611a8d565b610769565b6101b9610280366004611b54565b61079e565b61014b610293366004611b28565b610824565b61016861084f565b6101b9600081565b6101b36102b6366004611b6f565b61085e565b6101b36102c9366004611c36565b610869565b6101686102dc366004611a8d565b6108a1565b6101b36102ef366004611cb1565b6108ac565b6101b960008051602061203f83398151915281565b6101b3610317366004611b28565b6108f3565b61014b61032a366004611d12565b61090f565b600061033a8261093d565b92915050565b60606000805461034f90611d3c565b80601f016020809104026020016040519081016040528092919081815260200182805461037b90611d3c565b80156103c85780601f1061039d576101008083540402835291602001916103c8565b820191906000526020600020905b8154815290600101906020018083116103ab57829003601f168201915b5050505050905090565b60006103dd82610962565b506000908152600460205260409020546001600160a01b031690565b600061040482610769565b9050806001600160a01b0316836001600160a01b0316036104765760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806104925750610492813361090f565b6105045760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161046d565b61050e8383610987565b505050565b61051e335b826109f5565b61053a5760405162461bcd60e51b815260040161046d90611d76565b61050e838383610a54565b6000908152600b602052604090206001015490565b61056382610545565b61056c81610be9565b61050e8383610bf3565b60006105818361079e565b82106105e35760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161046d565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6001600160a01b038116331461067c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161046d565b6106868282610c79565b5050565b61050e83838360405180602001604052806000815250610869565b6106ae33610518565b6106ca5760405162461bcd60e51b815260040161046d90611d76565b6106d381610ce0565b50565b60006106e160085490565b82106107445760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161046d565b6008828154811061075757610757611dc4565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b03168061033a5760405162461bcd60e51b815260040161046d90611dda565b60006001600160a01b0382166108085760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161046d565b506001600160a01b031660009081526003602052604090205490565b6000918252600b602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606001805461034f90611d3c565b610686338383610ce9565b61087333836109f5565b61088f5760405162461bcd60e51b815260040161046d90611d76565b61089b84848484610db3565b50505050565b606061033a82610de6565b60008051602061203f8339815191526108c481610be9565b60006108cf600c5490565b90506108df600c80546001019055565b6108e98482610eee565b61089b8184610f08565b6108fc82610545565b61090581610be9565b61050e8383610c79565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b03198216637965db0b60e01b148061033a575061033a82610f93565b61096b81610fb8565b6106d35760405162461bcd60e51b815260040161046d90611dda565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906109bc82610769565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610a0183610769565b9050806001600160a01b0316846001600160a01b03161480610a285750610a28818561090f565b80610a4c5750836001600160a01b0316610a41846103d2565b6001600160a01b0316145b949350505050565b826001600160a01b0316610a6782610769565b6001600160a01b031614610acb5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161046d565b6001600160a01b038216610b2d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161046d565b610b38838383610fd5565b610b43600082610987565b6001600160a01b0383166000908152600360205260408120805460019290610b6c908490611e22565b90915550506001600160a01b0382166000908152600360205260408120805460019290610b9a908490611e39565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03868116918217909255915184939187169160008051602061205f83398151915291a4505050565b6106d38133610fe0565b610bfd8282610824565b610686576000828152600b602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610c353390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610c838282610824565b15610686576000828152600b602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6106d381611044565b816001600160a01b0316836001600160a01b031603610d465760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015260640161046d565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610dbe848484610a54565b610dca84848484611084565b61089b5760405162461bcd60e51b815260040161046d90611e51565b6060610df182610962565b6000828152600a602052604081208054610e0a90611d3c565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3690611d3c565b8015610e835780601f10610e5857610100808354040283529160200191610e83565b820191906000526020600020905b815481529060010190602001808311610e6657829003601f168201915b505050505090506000610ea160408051602081019091526000815290565b90508051600003610eb3575092915050565b815115610ee5578082604051602001610ecd929190611ea3565b60405160208183030381529060405292505050919050565b610a4c84611185565b6106868282604051806020016040528060008152506111f9565b610f1182610fb8565b610f745760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b606482015260840161046d565b6000828152600a60209081526040909120825161050e92840190611920565b60006001600160e01b0319821663780e9d6360e01b148061033a575061033a8261122c565b6000908152600260205260409020546001600160a01b0316151590565b61050e83838361127c565b610fea8282610824565b61068657611002816001600160a01b03166014611334565b61100d836020611334565b60405160200161101e929190611ed2565b60408051601f198184030181529082905262461bcd60e51b825261046d91600401611a7a565b61104d816114cf565b6000818152600a60205260409020805461106690611d3c565b1590506106d3576000818152600a602052604081206106d3916119a4565b60006001600160a01b0384163b1561117a57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906110c8903390899088908890600401611f41565b6020604051808303816000875af1925050508015611103575060408051601f3d908101601f1916820190925261110091810190611f7e565b60015b611160573d808015611131576040519150601f19603f3d011682016040523d82523d6000602084013e611136565b606091505b5080516000036111585760405162461bcd60e51b815260040161046d90611e51565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610a4c565b506001949350505050565b606061119082610962565b60006111a760408051602081019091526000815290565b905060008151116111c757604051806020016040528060008152506111f2565b806111d184611564565b6040516020016111e2929190611ea3565b6040516020818303038152906040525b9392505050565b6112038383611664565b6112106000848484611084565b61050e5760405162461bcd60e51b815260040161046d90611e51565b60006001600160e01b031982166380ac58cd60e01b148061125d57506001600160e01b03198216635b5e139f60e01b145b8061033a57506301ffc9a760e01b6001600160e01b031983161461033a565b6001600160a01b0383166112d7576112d281600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6112fa565b816001600160a01b0316836001600160a01b0316146112fa576112fa8382611790565b6001600160a01b0382166113115761050e8161182d565b826001600160a01b0316826001600160a01b03161461050e5761050e82826118dc565b60606000611343836002611f9b565b61134e906002611e39565b6001600160401b0381111561136557611365611bab565b6040519080825280601f01601f19166020018201604052801561138f576020820181803683370190505b509050600360fc1b816000815181106113aa576113aa611dc4565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106113d9576113d9611dc4565b60200101906001600160f81b031916908160001a90535060006113fd846002611f9b565b611408906001611e39565b90505b6001811115611480576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061143c5761143c611dc4565b1a60f81b82828151811061145257611452611dc4565b60200101906001600160f81b031916908160001a90535060049490941c9361147981611fba565b905061140b565b5083156111f25760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161046d565b60006114da82610769565b90506114e881600084610fd5565b6114f3600083610987565b6001600160a01b038116600090815260036020526040812080546001929061151c908490611e22565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b0384169060008051602061205f833981519152908390a45050565b60608160000361158b5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156115b5578061159f81611fd1565b91506115ae9050600a83612000565b915061158f565b6000816001600160401b038111156115cf576115cf611bab565b6040519080825280601f01601f1916602001820160405280156115f9576020820181803683370190505b5090505b8415610a4c5761160e600183611e22565b915061161b600a86612014565b611626906030611e39565b60f81b81838151811061163b5761163b611dc4565b60200101906001600160f81b031916908160001a90535061165d600a86612000565b94506115fd565b6001600160a01b0382166116ba5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161046d565b6116c381610fb8565b1561170f5760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b604482015260640161046d565b61171b60008383610fd5565b6001600160a01b0382166000908152600360205260408120805460019290611744908490611e39565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b038616908117909155905183929060008051602061205f833981519152908290a45050565b6000600161179d8461079e565b6117a79190611e22565b6000838152600760205260409020549091508082146117fa576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061183f90600190611e22565b6000838152600960205260408120546008805493945090928490811061186757611867611dc4565b90600052602060002001549050806008838154811061188857611888611dc4565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806118c0576118c0612028565b6001900381819060005260206000200160009055905550505050565b60006118e78361079e565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b82805461192c90611d3c565b90600052602060002090601f01602090048101928261194e5760008555611994565b82601f1061196757805160ff1916838001178555611994565b82800160010185558215611994579182015b82811115611994578251825591602001919060010190611979565b506119a09291506119da565b5090565b5080546119b090611d3c565b6000825580601f106119c0575050565b601f0160209004906000526020600020908101906106d391905b5b808211156119a057600081556001016119db565b6001600160e01b0319811681146106d357600080fd5b600060208284031215611a1757600080fd5b81356111f2816119ef565b60005b83811015611a3d578181015183820152602001611a25565b8381111561089b5750506000910152565b60008151808452611a66816020860160208601611a22565b601f01601f19169290920160200192915050565b6020815260006111f26020830184611a4e565b600060208284031215611a9f57600080fd5b5035919050565b80356001600160a01b0381168114611abd57600080fd5b919050565b60008060408385031215611ad557600080fd5b611ade83611aa6565b946020939093013593505050565b600080600060608486031215611b0157600080fd5b611b0a84611aa6565b9250611b1860208501611aa6565b9150604084013590509250925092565b60008060408385031215611b3b57600080fd5b82359150611b4b60208401611aa6565b90509250929050565b600060208284031215611b6657600080fd5b6111f282611aa6565b60008060408385031215611b8257600080fd5b611b8b83611aa6565b915060208301358015158114611ba057600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60006001600160401b0380841115611bdb57611bdb611bab565b604051601f8501601f19908116603f01168101908282118183101715611c0357611c03611bab565b81604052809350858152868686011115611c1c57600080fd5b858560208301376000602087830101525050509392505050565b60008060008060808587031215611c4c57600080fd5b611c5585611aa6565b9350611c6360208601611aa6565b92506040850135915060608501356001600160401b03811115611c8557600080fd5b8501601f81018713611c9657600080fd5b611ca587823560208401611bc1565b91505092959194509250565b60008060408385031215611cc457600080fd5b611ccd83611aa6565b915060208301356001600160401b03811115611ce857600080fd5b8301601f81018513611cf957600080fd5b611d0885823560208401611bc1565b9150509250929050565b60008060408385031215611d2557600080fd5b611d2e83611aa6565b9150611b4b60208401611aa6565b600181811c90821680611d5057607f821691505b602082108103611d7057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015611e3457611e34611e0c565b500390565b60008219821115611e4c57611e4c611e0c565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60008351611eb5818460208801611a22565b835190830190611ec9818360208801611a22565b01949350505050565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611f04816017850160208801611a22565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611f35816028840160208801611a22565b01602801949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611f7490830184611a4e565b9695505050505050565b600060208284031215611f9057600080fd5b81516111f2816119ef565b6000816000190483118215151615611fb557611fb5611e0c565b500290565b600081611fc957611fc9611e0c565b506000190190565b600060018201611fe357611fe3611e0c565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261200f5761200f611fea565b500490565b60008261202357612023611fea565b500690565b634e487b7160e01b600052603160045260246000fdfe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212200fcc49734c71b86b75a6730925ce0b22cd0634ce7cc265d30948f3e0cdc4135964736f6c634300080e0033";

type ERC721MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Mock__factory extends ContractFactory {
  constructor(...args: ERC721MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Mock> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721Mock>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721Mock {
    return super.attach(address) as ERC721Mock;
  }
  override connect(signer: Signer): ERC721Mock__factory {
    return super.connect(signer) as ERC721Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MockInterface {
    return new utils.Interface(_abi) as ERC721MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC721Mock;
  }
}
