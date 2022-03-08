import React, { Fragment, useEffect, useState } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { toast } from "react-toastify";
import { DownArrowIcon } from "@components/common/Icons";
import { ConfirmMsg } from "@components/common";
import { StyledMenu, StyledMenuItem } from "./ChainMenuComponents";
import { getChainInfo, switchNetworkHandler } from "@lib/utils";
import { Chain, ChainId } from "@lib/constants";

export interface ChainMenuProps {
  options: Array<ChainId>;
}

const ChainMenu = ({ options }: ChainMenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedChain, setSelectedChain] = useState(Chain.ETHEREUM);
  const open = Boolean(anchorEl);

  const { active, library, chainId } = useWeb3React<Web3Provider>();

  const [showConfirmMessage, setShowConfirmMessage] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!active) {
      return;
    }

    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    chainId: ChainId
  ) => {
    if (selectedChain === chainId) {
      return setAnchorEl(null);
    }

    setShowConfirmMessage(true);

    switchNetworkHandler({ library, chainId })
      .then(() => {
        setSelectedChain(chainId);
        toast.success(`Connected to ${getChainInfo(chainId)?.name}`);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setShowConfirmMessage(false);
      });
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (chainId) {
      setSelectedChain(chainId);
    }
  }, [chainId]);

  return (
    <Fragment>
      <ButtonBase
        onClick={handleClick}
        sx={{
          padding: "0.5em 1.937em",
          color: (theme) => theme.palette.blue.main,
          cursor: active ? "pointer" : "not-allowed",
        }}
      >
        {getChainInfo(selectedChain)?.name}
        {active && (
          <DownArrowIcon
            sx={{ width: "9px", height: "6px", margin: "0 0 0 0.5rem" }}
          />
        )}
      </ButtonBase>

      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((chainId) => {
          const { name, disabled } = getChainInfo(chainId);

          return (
            <StyledMenuItem
              key={chainId}
              onClick={(event) => handleMenuItemClick(event, chainId)}
              disabled={disabled}
            >
              {name}
            </StyledMenuItem>
          );
        })}
      </StyledMenu>

      <ConfirmMsg
        title={
          <>
            Confirm network change <br /> on your wallet
          </>
        }
        open={showConfirmMessage}
        onClose={() => setShowConfirmMessage(false)}
      />
    </Fragment>
  );
};

export default ChainMenu;
