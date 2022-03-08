import { Chain } from "@lib/constants";

export const LENDING_POOL_ADDRESS: { [key in Chain | number]: string } = {
  [Chain.ETHEREUM]: "",
  [Chain.ROPSTEN]: "0x92B04DB840d97FA36954D93acae05ecbEBfD523C",
  [Chain.RINKEBY]: "0xD7C9Db772eA2721E3Ca2E8712a3d656867b03AF4",
  [Chain.KOVAN]: "0x3ac9FD08124D9907c4ec5E9A3F0231EfE52B6DAf",

  [Chain.AURORA]: "",
  [Chain.ARBITRUM_ONE]: "",
  [Chain.POLYGON]: "",
  [Chain.FANTOM]: "",
  [Chain.AVALANCHE]: "",

  [Chain.LOCALHOST]: "",
};
