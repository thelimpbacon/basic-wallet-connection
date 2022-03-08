import React from "react";
import { Meta, Story } from "@storybook/react";
import { ChainMenu } from "@components/common";
import { ChainMenuProps } from "./ChainMenu";
import { Chain } from "@lib/constants";

export default {
  title: "components/common/ChainMenu",
  component: ChainMenu,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1em",
          backgroundColor: "#021B60",
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta;

const Template: Story<ChainMenuProps> = (args) => <ChainMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    Chain.ETHEREUM,
    Chain.AURORA,
    Chain.ARBITRUM_ONE,
    Chain.POLYGON,
    Chain.FANTOM,
  ],
};
