/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Verifier19,
  Verifier19Interface,
} from "../../../../contracts/verifiers/Verifier19.sol/Verifier19";

const _abi = [
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[4]",
        name: "input",
        type: "uint256[4]",
      },
    ],
    name: "verifyProof",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061110e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635fe8c13b14610030575b600080fd5b61004361003e366004610f47565b610045565b005b61004d610d6c565b6040805180820182528651815260208088015181830152908352815160808101835286515181840190815287518301516060830152815282518084018452878301805151825251830151818401528183015283820152815180830183528551815285820151918101919091529082015260006100c76103b4565b6080810151519091506100dc60046001611051565b146100fa576040516309bde33960e01b815260040160405180910390fd5b6000816080015160008151811061011357610113611025565b6020026020010151905061016581610160846080015160018151811061013b5761013b611025565b60200260200101518760006004811061015657610156611025565b60200201516108a8565b610945565b90506101a081610160846080015160028151811061018557610185611025565b60200260200101518760016004811061015657610156611025565b90506101db8161016084608001516003815181106101c0576101c0611025565b60200260200101518760026004811061015657610156611025565b90506102168161016084608001516004815181106101fb576101fb611025565b60200260200101518760036004811061015657610156611025565b60408051600480825260a0820190925291925060009190816020015b61023a610d9e565b81526020019060019003908161023257505060408051600480825260a0820190925291925060009190602082015b610270610db8565b8152602001906001900390816102685750508551909150610290906109a5565b826000815181106102a3576102a3611025565b60200260200101819052508460200151816000815181106102c6576102c6611025565b60200260200101819052508360000151826001815181106102e9576102e9611025565b602002602001018190525083602001518160018151811061030c5761030c611025565b6020026020010181905250828260028151811061032b5761032b611025565b602002602001018190525083604001518160028151811061034e5761034e611025565b602002602001018190525084604001518260038151811061037157610371611025565b602002602001018190525083606001518160038151811061039457610394611025565b60200260200101819052506103a98282610a65565b505050505050505050565b6103bc610dd8565b6040805180820182527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19266020808301919091529083528151608080820184527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c8285019081527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab606080850191909152908352845180860186527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f08d529aaca586b844314f80edfb1784260646108b75c158ce3f088c188bc802e8185019081527f234536b6213200b2b44aebffcf0b574a2d0f4f2b47ef98db4b4431cfefc3bf22828401528152835180850185527f2e556c221fa59c978e78e9bba38e8947b59ef785b5e31ec8cf90e613787fb79381527f059469a2c10792ee9f1573148667562f175586470cea1dbb54bed106ef361b348185015281840152908401528151600580825260c08201909352919082015b61063f610d9e565b81526020019060019003908161063757505060808201908152604080518082019091527f15d64dac8e74c233b7859722356fc14c262242ae306c20f060880dbd9baa452e81527f2c28232f85d16cdd157a841cd7795ae537f6769d6b30fd18e9e03060246cc03c6020820152905180516000906106be576106be611025565b602002602001018190525060405180604001604052807f0dfb95a3e8c20cf8a70021ad12080f778abc60508bfe088803fdd53c46b4202c81526020017f224c92fd97d25de5d97901b9046ee6a5788dddf425cdba5d6e8ecf6ea83248c8815250816080015160018151811061073557610735611025565b602002602001018190525060405180604001604052807f1923f2f39f07d16e03562b8f1efed58073a457af74aa02179ced725e015b682c81526020017f19fe61c672e47a96a72333d6a66b7d8447ed8838fda18031d49370f0b766760781525081608001516002815181106107ac576107ac611025565b602002602001018190525060405180604001604052807f1d5da06c3e0fcfbe6c9e08f3f0eb1aa56b2927d65f2517bd5adbdab0609bc7d781526020017f03dc485cb2654fa526804696fae41fed451342bbfbcee7cc006f4f2271514d73815250816080015160038151811061082357610823611025565b602002602001018190525060405180604001604052807f11ac6ab06bbe07af99a7b46a2e5b3b9b80f5a57b64298f686c8660e36ea8bf3681526020017f0b66b9cf601565d1ea0341acb52c80d0114f7cf805b0d2a94848782bcd9c285b815250816080015160048151811061089a5761089a611025565b602002602001018190525090565b6108b0610d9e565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182106108f0576040516309bde33960e01b815260040160405180910390fd5b6108f8610e1f565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa90508061093d576040516309bde33960e01b815260040160405180910390fd5b505092915050565b61094d610d9e565b610955610e3d565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508061093d576040516309bde33960e01b815260040160405180910390fd5b6109ad610d9e565b81511580156109be57506020820151155b156109dc575050604080518082019091526000808252602082015290565b81516000805160206110b9833981519152111580610a0c57506000805160206110b9833981519152826020015110155b15610a2a576040516309bde33960e01b815260040160405180910390fd5b60405180604001604052808360000151815260200183602001516000805160206110b9833981519152610a5d9190611069565b905292915050565b8051825114610a87576040516309bde33960e01b815260040160405180910390fd5b81516000610a96826006611080565b90506000816001600160401b03811115610ab257610ab2610e97565b604051908082528060200260200182016040528015610adb578160200160208202803683370190505b50905060005b83811015610d1657858181518110610afb57610afb611025565b60200260200101516000015182826006610b159190611080565b610b20906000611051565b81518110610b3057610b30611025565b602002602001018181525050858181518110610b4e57610b4e611025565b60200260200101516020015182826006610b689190611080565b610b73906001611051565b81518110610b8357610b83611025565b602002602001018181525050848181518110610ba157610ba1611025565b6020908102919091010151515182610bba836006611080565b610bc5906002611051565b81518110610bd557610bd5611025565b602002602001018181525050848181518110610bf357610bf3611025565b60209081029190910181015151015182610c0e836006611080565b610c19906003611051565b81518110610c2957610c29611025565b602002602001018181525050848181518110610c4757610c47611025565b602002602001015160200151600060028110610c6557610c65611025565b602002015182610c76836006611080565b610c81906004611051565b81518110610c9157610c91611025565b602002602001018181525050848181518110610caf57610caf611025565b602002602001015160200151600160028110610ccd57610ccd611025565b602002015182610cde836006611080565b610ce9906005611051565b81518110610cf957610cf9611025565b602090810291909101015280610d0e8161109f565b915050610ae1565b50610d1f610e5b565b6000602082602086026020860160086107d05a03fa9050801580610d4557508151600114155b15610d63576040516309bde33960e01b815260040160405180910390fd5b50505050505050565b6040518060600160405280610d7f610d9e565b8152602001610d8c610db8565b8152602001610d99610d9e565b905290565b604051806040016040528060008152602001600081525090565b6040518060400160405280610dcb610e79565b8152602001610d99610e79565b6040518060a00160405280610deb610d9e565b8152602001610df8610db8565b8152602001610e05610db8565b8152602001610e12610db8565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715610ecf57610ecf610e97565b60405290565b604051608081016001600160401b0381118282101715610ecf57610ecf610e97565b600082601f830112610f0857600080fd5b610f10610ead565b806040840185811115610f2257600080fd5b845b81811015610f3c578035845260209384019301610f24565b509095945050505050565b600080600080610180808688031215610f5f57600080fd5b610f698787610ef7565b9450604087605f880112610f7c57600080fd5b610f84610ead565b8060c089018a811115610f9657600080fd5b838a015b81811015610fbb57610fac8c82610ef7565b84526020909301928401610f9a565b50819750610fc98b82610ef7565b9650505050508661011f870112610fdf57600080fd5b610fe7610ed5565b908601908088831115610ff957600080fd5b61010088015b83811015611017578035835260209283019201610fff565b509598949750929550505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156110645761106461103b565b500190565b60008282101561107b5761107b61103b565b500390565b600081600019048311821515161561109a5761109a61103b565b500290565b6000600182016110b1576110b161103b565b506001019056fe30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47a2646970667358221220dfaaddda94922c432d09bedb632c461283b7793b9779a0cf88563b39af78814c64736f6c634300080e0033";

type Verifier19ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Verifier19ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier19__factory extends ContractFactory {
  constructor(...args: Verifier19ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Verifier19> {
    return super.deploy(overrides || {}) as Promise<Verifier19>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Verifier19 {
    return super.attach(address) as Verifier19;
  }
  override connect(signer: Signer): Verifier19__factory {
    return super.connect(signer) as Verifier19__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier19Interface {
    return new utils.Interface(_abi) as Verifier19Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier19 {
    return new Contract(address, _abi, signerOrProvider) as Verifier19;
  }
}
