import { ChainInformation, chainList } from "@lib/constants";

const getChainInfo = (chainId: number): ChainInformation => chainList[chainId];

export default getChainInfo;
