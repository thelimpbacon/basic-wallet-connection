import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const CloseIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 18L18 6M6 6L18 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default CloseIcon;
