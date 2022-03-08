import React, { Fragment, useState, useContext } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { toast } from "react-toastify";
import {
  AccountButton,
  ConnectWallet,
  UnsupportedNetwork,
} from "@components/common";
import { connectWalletHandler, getExplorerLink, HashType } from "@lib/utils";

// this component will be wrapped by a context provider
// it will query for for the AccountButtonProps
const AccountNavButton = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const { active, activate, deactivate, account, error, chainId } =
    useWeb3React<Web3Provider>();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleConnectWalletClick = () => {
    connectWalletHandler({ activate })
      .then(() => {
        toast.success("Success!");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  if (!active) {
    if (error instanceof UnsupportedChainIdError) {
      return <UnsupportedNetwork />;
    }
    return <ConnectWallet onClick={handleConnectWalletClick} />;
  }

  return (
    <Fragment>
      <AccountButton onClick={handleClick} address={account as string} />
    </Fragment>
  );
};

export default AccountNavButton;
