import * as NextImage from "next/image";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import theme from "../styles/theme";
import { Web3Manager } from "@lib/providers";

// so there is no nextjs image optimization on storybook
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} unoptimized loader={({ src }) => src} />
  ),
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <Web3Manager>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            minHeight: "100vh",
          }}
        >
          {Story()}
        </Box>
      </MuiThemeProvider>
    </Web3Manager>
  ),
];
