import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const DownArrowIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.0136 4.86358L0.786396 1.63637C0.219428 1.0694 0.62098 0.0999756 1.42279 0.0999756H7.87721C8.67902 0.0999756 9.08057 1.0694 8.5136 1.63637L5.2864 4.86358C4.93492 5.21505 4.36508 5.21505 4.0136 4.86358Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default DownArrowIcon;
