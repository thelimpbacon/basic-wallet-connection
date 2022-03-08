export enum Chain {
  ETHEREUM = 1,
  RINKEBY = 4,
  ROPSTEN = 3,
  KOVAN = 42,

  AURORA = 1313161554,
  ARBITRUM_ONE = 42161,
  POLYGON = 137,
  FANTOM = 250,
  AVALANCHE = 43114,

  LOCALHOST = 1337,
}

interface Currency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface ChainInformation {
  name: string;
  /**block chain explorer */
  explorer: string;
  docs?: string;
  nativeCurrency?: Currency;
  rpcUrls?: Array<string>;
  /** if network is currently available in Cora */
  disabled: boolean;
}

export type ChainId = number;

const chainList: { [chainId: ChainId]: ChainInformation } = {
  [Chain.ETHEREUM]: {
    name: "Ethereum",
    disabled: false,
    docs: "https://docs.uniswap.org",
    explorer: "https://etherscan.io",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
  },
  [Chain.RINKEBY]: {
    name: "Rinkeby",
    explorer: "https://rinkeby.etherscan.io",
    rpcUrls: ["https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    nativeCurrency: {
      name: "Rinkeby ETH",
      symbol: "rinkETH",
      decimals: 18,
    },
    disabled: false,
  },
  [Chain.ROPSTEN]: {
    name: "Ropsten",
    explorer: "https://ropsten.etherscan.io",
    rpcUrls: ["https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    nativeCurrency: {
      name: "Ropsten ETH",
      symbol: "ropETH",
      decimals: 18,
    },
    disabled: false,
  },
  [Chain.KOVAN]: {
    name: "Kovan",
    explorer: "https://kovan.etherscan.io/",
    rpcUrls: ["https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    nativeCurrency: {
      name: "Kovan ETH",
      symbol: "kovETH",
      decimals: 18,
    },
    disabled: false,
  },
  [Chain.AURORA]: {
    name: "Aurora",
    explorer: "https://explorer.mainnet.aurora.dev",
    rpcUrls: ["https://mainnet.aurora.dev"],
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    disabled: false,
  },
  [Chain.ARBITRUM_ONE]: {
    name: "Arbitrum",
    explorer: "#",
    disabled: true,
  },
  [Chain.POLYGON]: {
    name: "Polygon",
    explorer: "#",
    disabled: true,
  },
  [Chain.FANTOM]: {
    name: "Fantom",
    explorer: "https://ftmscan.com",
    rpcUrls: ["https://rpc.ftm.tools"],
    nativeCurrency: {
      name: "FTM",
      symbol: "FTM",
      decimals: 18,
    },
    disabled: false,
  },
  [Chain.AVALANCHE]: {
    name: "Avalanche",
    explorer: "https://snowtrace.io",
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    disabled: false,
  },
  [Chain.LOCALHOST]: {
    name: "Localhost 8545",
    explorer: "",
    rpcUrls: ["http://127.0.0.1:8545/"],
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    disabled: false,
  },
};

export default chainList;
