import { styled } from "@mui/material/styles";

const BaseBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  borderRadius: "0.25em",
  background: theme.palette.primary.main,
  color: "#FFF",

  fontSize: "0.8125rem",
  fontWeight: 500,
  letterSpacing: "0.252px",
  padding: "0.5em 0.8em",

  [theme.breakpoints.up("md")]: {
    padding: "0.9em 1.42em",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "0.9375rem",
  },
}));

export default BaseBox;
