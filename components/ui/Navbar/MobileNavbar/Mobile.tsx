import React from "react";
import NextLink from "next/link";
import Box from "@mui/system/Box";
import MuiLink from "@mui/material/Link";
import { BaseBox } from "@components/common";
import { AccountNavButton } from "@components/ui";

const Mobile = (): JSX.Element => {
  return (
    <>
      <BaseBox
        as="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%",
          backgroundColor: "#010d30",
          borderRadius: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "0.5em",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <NextLink href="#" passHref>
            <MuiLink sx={{ display: "flex", alignItems: "center" }}>
              thelimpbacon
            </MuiLink>
          </NextLink>
        </Box>

        <AccountNavButton />
      </BaseBox>
    </>
  );
};

export default Mobile;
