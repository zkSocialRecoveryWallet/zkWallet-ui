/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Verifier24,
  Verifier24Interface,
} from "../../../../contracts/verifiers/Verifier24.sol/Verifier24";

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
  "0x608060405234801561001057600080fd5b50611172806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635fe8c13b14610030575b600080fd5b61004361003e366004610fcb565b610045565b005b61004d610ddf565b6040805180820182528651815260208088015181830152908352815160808101835286515181840190815287518301516060830152815282518084018452878301805151825251830151818401528183015283820152815180830183528551815285820151918101919091529082015260006100c76103c0565b6080810151519091506100dc600460016110d5565b146100fa576040516309bde33960e01b815260040160405180910390fd5b60008160800151600081518110610113576101136110a9565b6020026020010151905061016581610160846080015160018151811061013b5761013b6110a9565b602002602001015187600060048110610156576101566110a9565b60200201516108c0565b610969565b90506101a0816101608460800151600281518110610185576101856110a9565b602002602001015187600160048110610156576101566110a9565b90506101db8161016084608001516003815181106101c0576101c06110a9565b602002602001015187600260048110610156576101566110a9565b90506102168161016084608001516004815181106101fb576101fb6110a9565b602002602001015187600360048110610156576101566110a9565b60408051600480825260a0820190925291925060009190816020015b604080518082019091526000808252602082015281526020019060019003908161023257505060408051600480825260a0820190925291925060009190602082015b61027c610e30565b815260200190600190039081610274575050855190915061029c906109d5565b826000815181106102af576102af6110a9565b60200260200101819052508460200151816000815181106102d2576102d26110a9565b60200260200101819052508360000151826001815181106102f5576102f56110a9565b6020026020010181905250836020015181600181518110610318576103186110a9565b60200260200101819052508282600281518110610337576103376110a9565b602002602001018190525083604001518160028151811061035a5761035a6110a9565b602002602001018190525084604001518260038151811061037d5761037d6110a9565b60200260200101819052508360600151816003815181106103a0576103a06110a9565b60200260200101819052506103b58282610ad7565b505050505050505050565b6103c8610e50565b6040805180820182527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19266020808301919091529083528151608080820184527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c8285019081527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab606080850191909152908352845180860186527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f213db2bdfb128fec0e98d364b9109caf26d66cacbbc808535af07af00200acc68185019081527f164ec2e66021720a0d70b0cc70597ed748f0af9b080f5e789a821de5b0a91a1a828401528152835180850185527f2f2f2c0cc9d9b911a348466a4749c3a49d2629c9dde430ec9474f2bb06fc7f2f81527f173b3259b29d0e0c0176e2424bee65405bdd1e611bb933c19f5bfed931aab21e8185015281840152908401528151600580825260c08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161064357505060808201908152604080518082019091527f2b501c6317c16d185d7797db4b8735388ab31aa4d5d022502dce7c0fa5f30e3b81527f05e94a656be4a2f9128583762dc9e007d450315e71ef4d6cf82e64ee743255626020820152905180516000906106d6576106d66110a9565b602002602001018190525060405180604001604052807f1da680138dd3bdd851d6edcb441a137301ca1902c6c50036b27153520aee7fb481526020017f25fc89274231e8228cba90e52607039681d60f5d6b3a07fb429d116f53a4443d815250816080015160018151811061074d5761074d6110a9565b602002602001018190525060405180604001604052807f2a5036a81225c106605e7233124414ca2359360b60f19da736e6b4ebcfc9ce5481526020017f1f939f972ad716e18a465e4c5ec3669976b77364106a0cd73418ba058b7884cd81525081608001516002815181106107c4576107c46110a9565b602002602001018190525060405180604001604052807f2c9f9c6dfd0aa6e591235ad81a9923fe056846ca742e53af6a571ec00519d9b581526020017f0b8c60480c49dcfad4a82226600a9569494567e627301779e35b9bf8e0fe43d3815250816080015160038151811061083b5761083b6110a9565b602002602001018190525060405180604001604052807f1b447eb43a748829489de9e667c53a3053498f9adaa59b0bedcc7c8b463f515481526020017f085fb2aea389c48f2e7d17242f64b5bc3506cdf55b20bf9395da0e2f749bb09e81525081608001516004815181106108b2576108b26110a9565b602002602001018190525090565b60408051808201909152600080825260208201527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018210610914576040516309bde33960e01b815260040160405180910390fd5b61091c610ea1565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080610961576040516309bde33960e01b815260040160405180910390fd5b505092915050565b6040805180820190915260008082526020820152610985610ebf565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080610961576040516309bde33960e01b815260040160405180910390fd5b604080518082019091526000808252602082015281511580156109fa57506020820151155b15610a18575050604080518082019091526000808252602082015290565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47111580610a6c57507f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47826020015110155b15610a8a576040516309bde33960e01b815260040160405180910390fd5b60405180604001604052808360000151815260200183602001517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47610acf91906110ed565b905292915050565b8051825114610af9576040516309bde33960e01b815260040160405180910390fd5b81516000610b08826006611104565b905060008167ffffffffffffffff811115610b2557610b25610f19565b604051908082528060200260200182016040528015610b4e578160200160208202803683370190505b50905060005b83811015610d8957858181518110610b6e57610b6e6110a9565b60200260200101516000015182826006610b889190611104565b610b939060006110d5565b81518110610ba357610ba36110a9565b602002602001018181525050858181518110610bc157610bc16110a9565b60200260200101516020015182826006610bdb9190611104565b610be69060016110d5565b81518110610bf657610bf66110a9565b602002602001018181525050848181518110610c1457610c146110a9565b6020908102919091010151515182610c2d836006611104565b610c389060026110d5565b81518110610c4857610c486110a9565b602002602001018181525050848181518110610c6657610c666110a9565b60209081029190910181015151015182610c81836006611104565b610c8c9060036110d5565b81518110610c9c57610c9c6110a9565b602002602001018181525050848181518110610cba57610cba6110a9565b602002602001015160200151600060028110610cd857610cd86110a9565b602002015182610ce9836006611104565b610cf49060046110d5565b81518110610d0457610d046110a9565b602002602001018181525050848181518110610d2257610d226110a9565b602002602001015160200151600160028110610d4057610d406110a9565b602002015182610d51836006611104565b610d5c9060056110d5565b81518110610d6c57610d6c6110a9565b602090810291909101015280610d8181611123565b915050610b54565b50610d92610edd565b6000602082602086026020860160086107d05a03fa9050801580610db857508151600114155b15610dd6576040516309bde33960e01b815260040160405180910390fd5b50505050505050565b6040805160a081019091526000606082018181526080830191909152815260208101610e09610e30565b8152602001610e2b604051806040016040528060008152602001600081525090565b905290565b6040518060400160405280610e43610efb565b8152602001610e2b610efb565b6040805160e08101909152600060a0820181815260c0830191909152815260208101610e7a610e30565b8152602001610e87610e30565b8152602001610e94610e30565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610f5257610f52610f19565b60405290565b6040516080810167ffffffffffffffff81118282101715610f5257610f52610f19565b600082601f830112610f8c57600080fd5b610f94610f2f565b806040840185811115610fa657600080fd5b845b81811015610fc0578035845260209384019301610fa8565b509095945050505050565b600080600080610180808688031215610fe357600080fd5b610fed8787610f7b565b9450604087605f88011261100057600080fd5b611008610f2f565b8060c089018a81111561101a57600080fd5b838a015b8181101561103f576110308c82610f7b565b8452602090930192840161101e565b5081975061104d8b82610f7b565b9650505050508661011f87011261106357600080fd5b61106b610f58565b90860190808883111561107d57600080fd5b61010088015b8381101561109b578035835260209283019201611083565b509598949750929550505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156110e8576110e86110bf565b500190565b6000828210156110ff576110ff6110bf565b500390565b600081600019048311821515161561111e5761111e6110bf565b500290565b600060018201611135576111356110bf565b506001019056fea26469706673582212205c2a22368a1266e7eb9d1b3b7fc6ae819399dabcc3c9762183129ba555f953e264736f6c634300080e0033";

type Verifier24ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Verifier24ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier24__factory extends ContractFactory {
  constructor(...args: Verifier24ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Verifier24> {
    return super.deploy(overrides || {}) as Promise<Verifier24>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Verifier24 {
    return super.attach(address) as Verifier24;
  }
  override connect(signer: Signer): Verifier24__factory {
    return super.connect(signer) as Verifier24__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier24Interface {
    return new utils.Interface(_abi) as Verifier24Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier24 {
    return new Contract(address, _abi, signerOrProvider) as Verifier24;
  }
}