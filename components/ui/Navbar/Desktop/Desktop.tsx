import React from "react";
import NextLink from "next/link";
import Box from "@mui/system/Box";
import MuiLink from "@mui/material/Link";
import { BaseBox, Navlink, ChainMenu } from "@components/common";
import { AccountNavButton } from "@components/ui";
import { networksIncludedInChainMenu } from "@lib/connectors";

const DesktopNavbar = (): JSX.Element => {
  return (
    <BaseBox
      as="nav"
      sx={{
        width: "100%",
        // minWidth: "1225px",
        backgroundColor: "#010d30",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: {
          md: "0.9375rem 0.9375em 0.9375em 1.75rem",
        },
      }}
    >
      <Box sx={{ display: "flex", gap: "5em" }}>
        <NextLink href="#" passHref>
          <MuiLink>thelimpbacon</MuiLink>
        </NextLink>
      </Box>

      <Box sx={{ display: "flex", gap: "1.0625em" }}>
        <ChainMenu options={networksIncludedInChainMenu} />

        <AccountNavButton />
      </Box>
    </BaseBox>
  );
};

export default DesktopNavbar;
