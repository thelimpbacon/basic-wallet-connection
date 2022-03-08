import React from "react";
import { Meta, Story } from "@storybook/react";
import { AccountButton } from "@components/common";
import { AccountButtonProps } from "./AccountButton";

export default {
  title: "components/common/Account/AccountButton",
  component: AccountButton,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1em",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta;

const Template: Story<AccountButtonProps> = (args) => (
  <AccountButton {...args} />
);

export const Ethereum = Template.bind({});
Ethereum.args = {
  address: "0x07fE845042E4ead57404dcC50A802d66C0ec019A",
};
