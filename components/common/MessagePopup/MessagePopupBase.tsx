import React, { ReactNode } from "react";
import Dialog, { dialogClasses } from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { CloseIcon } from "@components/common";
import { IconButton } from "@mui/material";

export interface MessagePopupBaseProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const MessagePopupBaseModal = styled(Dialog)(({ theme }) => ({
  [`& .${dialogClasses.paper}`]: {
    minWidth: "400px",
    background: "transparent",
    boxShadow: "none",
    transform: "translateX(20px)",

    [theme.breakpoints.down("md")]: {
      transform: "none",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

export const MessageTitle = styled("div")({
  color: "white",
  fontSize: "1.0625rem",
  lineHeight: 1.4,
  margin: "1em 0 0.2em",
});

export const SubMessage = styled("div")({
  fontSize: "0.8125rem",
  lineHeight: 1.5,
  fontWeight: 500,
});

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5em",
  flexDirection: "column",
  width: "360px",
  padding: "2.5em",
  backgroundColor: theme.palette.darkblue.main,
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100%",
  },

  ".actionButton": {
    marginTop: "1.5em",
  },
}));

const MessagePopupBase = ({
  open,
  onClose,
  children,
}: MessagePopupBaseProps): JSX.Element => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MessagePopupBaseModal
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
    >
      {!fullScreen && (
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            padding: 0,
          }}
        >
          <CloseIcon />
        </IconButton>
      )}

      {children}
    </MessagePopupBaseModal>
  );
};

export default MessagePopupBase;
