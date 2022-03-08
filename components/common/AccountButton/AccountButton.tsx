import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import { BaseBox } from "@components/common";

export interface AccountButtonProps {
  address: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Account = ({ address, onClick }: AccountButtonProps): JSX.Element => {
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
          fontSize: {
            xs: "0.7875rem",
            xl: "0.875rem",
          },
        }}
      >
        {`${address?.substr(0, 5)}…${address?.substr(-4)}`}
      </BaseBox>
    </ButtonBase>
  );
};

export default Account;
