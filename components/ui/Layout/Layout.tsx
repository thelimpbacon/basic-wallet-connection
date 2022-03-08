import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Navbar } from "@components/ui";
import { BaseFlex } from "@components/common";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <BaseFlex sx={{ flexDirection: "column" }}>
      <Box
        sx={{
          padding: {
            xs: "1.75em 1.5em 0",
            md: "1.75em 5.375em",
          },
          minHeight: {
            xs: "100vh",
            xl: "80vh",
          },
          width: "100%",

          maxWidth: {
            xl: "1840px",
          },
        }}
      >
        <Navbar />

        <Box
          component="main"
          sx={{
            marginTop: "3.375rem",
          }}
        >
          {children}
        </Box>
      </Box>
    </BaseFlex>
  );
};

export default Layout;
