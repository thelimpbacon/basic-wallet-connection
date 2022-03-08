import { UnsupportedChainIdError } from "@web3-react/core";
import { injected } from "@lib/connectors/connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";

interface ConnectWalletArgs {
  activate: (
    connector: AbstractConnector,
    onError?: ((error: Error) => void) | undefined,
    throwErrors?: boolean | undefined
  ) => Promise<void>;
}

const connectWalletHandler = async ({ activate }: ConnectWalletArgs): Promise<void> => {
  await activate(injected, (err) => {
    if (err.message.includes("No Ethereum provider")) {
      throw "Could not find a wallet to connect to. Please download metamask";
    }
    if (err instanceof UnsupportedChainIdError) {
      throw "Unsupported Chain";
    }
    throw err.message;
  });
};

export default connectWalletHandler;
