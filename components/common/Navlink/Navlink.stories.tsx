import React from "react";
import { Meta, Story } from "@storybook/react";
import { Navlink } from "@components/common";
import { NavlinkProps } from "./Navlink";

export default {
  title: "components/common/Navlink",
  component: Navlink,
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

const Template: Story<NavlinkProps> = (args) => <Navlink {...args} />;

export const Unselected = Template.bind({});
Unselected.args = {
  text: "lending",
  url: "/",
};

export const Selected = Template.bind({});
Selected.args = {
  text: "portfolio",
  selected: true,
  url: "/portfolio",
};
