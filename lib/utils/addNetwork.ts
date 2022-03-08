import { Web3Provider } from "@ethersproject/providers";
import { getChainInfo } from "@lib/utils";
import { ChainId } from "@lib/constants";

interface AddNetworkArgs {
  library: Web3Provider | undefined;
  chainId: ChainId;
}

const addNetwork = async ({ library, chainId }: AddNetworkArgs): Promise<null | void> => {
  if (!library?.provider?.request) {
    return;
  }

  const chainIdHex = "0x" + chainId.toString(16);
  const chainInfo = getChainInfo(chainId);

  await library.provider.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: chainIdHex,
        chainName: chainInfo.name,
        rpcUrls: chainInfo.rpcUrls,
        nativeCurrency: chainInfo.nativeCurrency,
        blockExplorerUrls: [chainInfo.explorer],
      },
    ],
  });
};

export default addNetwork;
