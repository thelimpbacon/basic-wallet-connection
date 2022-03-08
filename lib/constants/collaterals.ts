import { Chain } from "@lib/types";

/**
 * This is a list of all the valid collaterals
 */

export interface Collateral {
  address: string;
  name: string;
  symbol: string;
  logoUrl: string;
  chain: Chain;
}

const coraCollaterals: Array<Collateral> = [
  {
    address: "0x123123121191",
    name: "Ethereum",
    symbol: "ETH",
    logoUrl: "/assets/tokenImages/Ethereum-ETH-icon.png",
    chain: Chain.Ethereum,
  },
  {
    address: "0x123123121192",
    name: "Near",
    symbol: "NEAR",
    logoUrl: "/assets/tokenImages/near_icon.png",
    chain: Chain.Aurora,
  },
];

export default coraCollaterals;
