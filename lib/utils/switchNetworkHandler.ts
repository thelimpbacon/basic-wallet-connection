import { ChainId } from "@lib/constants";
import { Web3Provider } from "@ethersproject/providers";
import { addNetwork } from "@lib/utils";

interface ChangeNetworkArgs {
  library: Web3Provider | undefined;
  chainId: ChainId;
}

const switchNetworkHandler = async ({
  library,
  chainId,
}: ChangeNetworkArgs): Promise<null | void> => {
  if (!library?.provider?.request) {
    return;
  }

  const chainIdHex = "0x" + chainId.toString(16);

  try {
    await library.provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainIdHex }],
    });
  } catch (err) {
    // https://docs.metamask.io/guide/rpc-api.html#other-rpc-methods
    // This error code indicates that the chain has not been added to MetaMask.
    if (
      ((err as any).code === 4902 && chainId !== undefined) ||
      ((err as any).data.originalError.code === 4902 && chainId !== undefined)
    ) {
      return await addNetwork({ library, chainId });
    } else {
      throw err;
    }
  }
};

export default switchNetworkHandler;
