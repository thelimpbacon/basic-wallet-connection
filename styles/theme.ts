import { createTheme } from "@mui/material/styles";

export interface BaseComponentProps {
  /**
   * @dev
   * primary scheme is mint/green
   *
   * secondary scheme is pink/red
   */
  scheme?: "primary" | "secondary";
}

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
  palette: {
    background: {
      default: "#021B60",
    },
    primary: { main: "#021B60" },
    gray: { main: "#95A5BE" },
    darkgray: { main: "#36487B" },
    darkblue: { main: "#112869" },
    blackblue: { main: "#010E30" },
    blue: { main: "#4080FF" },
    mint: { main: "#17CEB9" },
    green: { main: "#009E49" },
    pink: { main: "#EF5DA8" },
    red: { main: "#E34747" },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          ["@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)"]:
            {
              WebkitBackdropFilter: "blur(2px)",
              backdropFilter: "blur(2px)",
            },

          /* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
          ["@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none))"]:
            {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
        },
      },
    },
  },
});

export default theme;

// declaration for additional color palette
declare module "@mui/material/styles" {
  interface Palette {
    gray: Palette["primary"];
  }
  interface Palette {
    darkgray: Palette["primary"];
  }
  interface Palette {
    darkblue: Palette["primary"];
  }
  interface Palette {
    blackblue: Palette["primary"];
  }
  interface Palette {
    blue: Palette["primary"];
  }
  interface Palette {
    mint: Palette["primary"];
  }
  interface Palette {
    green: Palette["primary"];
  }
  interface Palette {
    pink: Palette["primary"];
  }
  interface Palette {
    red: Palette["primary"];
  }

  interface PaletteOptions {
    gray: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    darkgray: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    darkblue: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    blackblue: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    blue: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    mint: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    green: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    pink: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    red: PaletteOptions["primary"];
  }
}
