import React from "react";
import NextLink from "next/link";
import Box from "@mui/system/Box";
import MuiLink from "@mui/material/Link";

export interface NavlinkProps {
  text: string;
  url: string;
  selected?: boolean;
}

const Navlink = ({
  text,
  url,
  selected = false,
}: NavlinkProps): JSX.Element => {
  return (
    <NextLink href={url} passHref>
      <MuiLink>
        <Box
          component="span"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: !selected ? "blue.main" : "#FFF",

            ":hover": {
              color: "blue.main",
            },
          }}
        >
          {selected && (
            <Box
              sx={{
                height: "0.375em",
                width: "0.375em",
                marginRight: "0.375em",
                borderRadius: "9999px",
                backgroundColor: "blue.main",
              }}
            />
          )}
          {text}
        </Box>
      </MuiLink>
    </NextLink>
  );
};

export default Navlink;
