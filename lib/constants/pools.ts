import { Chain } from "@lib/types";

/**
 * This is a list of all the available pools
 */

export interface Pool {
  address: string;
  name: string;
  logoUrl: string;
  chain: Chain;
  token: {
    name: string;
    address: string;
  };
}

const coraPools: Array<Pool> = [
  {
    address: "0x123123121190",
    name: "USDC/ETH",
    logoUrl: "/assets/tokenImages/Ethereum-ETH-icon.png",
    chain: Chain.Ethereum,
    token: {
      address: "0x123123121190a",
      name: "T-USDC-P-ETH",
    },
  },
  {
    address: "0x123123121191",
    name: "USDC/NEAR",
    logoUrl: "/assets/tokenImages/near_icon.png",
    chain: Chain.Aurora,
    token: {
      address: "0x123123121191a",
      name: "T-USDC-P-NEAR",
    },
  },
  {
    address: "0x123123121192",
    name: "USDC/FTM",
    logoUrl: "/assets/tokenImages/fantom-ftm-logo.png",
    chain: Chain.Fantom,
    token: {
      address: "0x123123121192a",
      name: "T-USDC-P-FTM",
    },
  },
];

export default coraPools;
