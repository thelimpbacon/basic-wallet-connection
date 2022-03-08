import React from "react";
import { BaseBox } from "@components/common";

const UnsupportedNetwork = (): JSX.Element => {
  return (
    <BaseBox
      sx={{
        lineHeight: "1.7",
        backgroundColor: "red.main",
        fontSize: {
          xs: "0.7875rem",
          xl: "0.875rem",
        },
      }}
    >
      Unsupported network
    </BaseBox>
  );
};

export default UnsupportedNetwork;
