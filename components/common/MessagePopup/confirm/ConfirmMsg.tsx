import React, { ReactNode } from "react";
import { ConfirmIcon } from "@components/common";
import MessagePopupBase, {
  Content,
  MessagePopupBaseProps,
  MessageTitle,
  SubMessage,
} from "../MessagePopupBase";

export interface ConfirmMsgProps extends MessagePopupBaseProps {
  title?: string | ReactNode;
  message?: string;
}

const ConfirmMsg = ({
  title = (
    <>
      Confirm this transaction <br /> in your wallet
    </>
  ),
  message,
  onClose,
  open,
}: ConfirmMsgProps): JSX.Element => {
  return (
    <MessagePopupBase open={open} onClose={onClose}>
      <Content>
        <ConfirmIcon />

        <MessageTitle>{title}</MessageTitle>

        <SubMessage
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
            color: (theme) => theme.palette.gray.main,
          }}
        >
          {message}
        </SubMessage>
      </Content>
    </MessagePopupBase>
  );
};

export default ConfirmMsg;
