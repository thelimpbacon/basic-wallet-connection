import { InjectedConnector } from "@web3-react/injected-connector";
import { Chain } from "@lib/constants";

const testnetChainIds = [Chain.RINKEBY, Chain.ROPSTEN, Chain.KOVAN];

const productionChainIds = [
  Chain.ETHEREUM,
  Chain.AURORA,
  Chain.FANTOM,
  Chain.AVALANCHE,
];

const developmentChainIds = [
  ...productionChainIds,
  Chain.LOCALHOST,
  ...testnetChainIds,
];

/**
 * @dev
 *
 * testnet chains would still be available on production
 * but they are not visible on the network change dropdown menu
 *
 * the user needs to manually change the network on metamask
 */
export const networksIncludedInChainMenu =
  process.env.NODE_ENV === "development"
    ? developmentChainIds
    : productionChainIds;

const supportedChainIds = [...networksIncludedInChainMenu, ...testnetChainIds];

export const injected = new InjectedConnector({
  supportedChainIds,
});
