import { Chain, chainList } from "@lib/constants";

export enum HashType {
  ADDRESS = "address",
  TRANSACTION = "transaction",
  BLOCK = "block",
}

const getExplorerLink = (chainId: Chain, hash: string, hashType: HashType): string => {
  switch (hashType) {
    case HashType.ADDRESS:
      return `${chainList[chainId].explorer}/address/${hash}`;
    case HashType.TRANSACTION:
      return `${chainList[chainId].explorer}/tx/${hash}`;
    case HashType.BLOCK:
      return `${chainList[chainId].explorer}/block/${hash}`;
    default:
      return `${chainList[chainId].explorer}`;
  }
};

export default getExplorerLink;
