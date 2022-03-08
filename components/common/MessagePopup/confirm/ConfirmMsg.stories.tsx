import React from "react";
import { Meta, Story } from "@storybook/react";
import { ConfirmMsg } from "@components/common";
import { ConfirmMsgProps } from "./ConfirmMsg";

export default {
  title: "components/common/Message Popups/Confirm",
  component: ConfirmMsg,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1em",
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta;

const Template: Story<ConfirmMsgProps> = (args) => <ConfirmMsg {...args} />;

export const Confirm = Template.bind({});
Confirm.args = {
  open: true,
  message: "Deposit 499.56 USDC to T-USDC-P-ETH",
};
