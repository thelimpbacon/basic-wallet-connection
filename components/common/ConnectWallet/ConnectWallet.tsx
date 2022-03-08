import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import { BaseBox } from "@components/common";

interface ConnectWalletProps {
  onClick: any;
}

const ConnectWallet = ({ onClick }: ConnectWalletProps): JSX.Element => {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        padding: 0,
      }}
    >
      <BaseBox
        sx={{
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          lineHeight: "1.7",
          color: "mint.main",
          fontSize: {
            xs: "0.7875rem",
            xl: "0.875rem",
          },
        }}
      >
        Connect wallet
      </BaseBox>
    </ButtonBase>
  );
};

export default ConnectWallet;
