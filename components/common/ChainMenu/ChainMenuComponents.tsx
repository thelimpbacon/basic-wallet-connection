import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "0.25em",
    marginTop: "0.8125em",
    minWidth: "158px",
    color: "#FFF",
    backgroundColor: theme.palette.blackblue.main,
    boxShadow: "10px 10px 35px rgba(0, 0, 0, 0.33)",

    "& .MuiMenu-list": {
      padding: "0.875em 0.3em",
    },
  },
}));

export const StyledMenuItem = styled((props: MenuItemProps) => (
  <MenuItem disableRipple dense {...props} />
))(({ theme }) => ({
  fontSize: "0.8125rem",
  lineHeight: 3,
  fontWeight: 500,
  letterSpacing: "0.252px",
  padding: "0 2.385em",
  borderRadius: "0.25em",

  ":hover": {
    backgroundColor: theme.palette.darkgray.main,
  },
}));
