import React from "react";
import { Meta, Story } from "@storybook/react";
import { Navbar } from "@components/ui";
import { Chain } from "@lib/types";

export default {
  title: "components/ui/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    nextRouter: {
      pathname: "/",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "28px 86px",
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  <Navbar />
);

export const Primary = Template.bind({});
Primary.args = {
  address: "0x1508e56e8D4cB78Ee60DaFe1399C0A644DE66520",
  chain: Chain.Ethereum,
};

export const NotConnected = Template.bind({});
NotConnected.args = {};
