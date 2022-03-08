import React from "react";
import { Meta, Story } from "@storybook/react";
import { BaseBox } from "@components/common";

export default {
  title: "components/common/BaseBox",
  component: BaseBox,
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

const Template: Story = (args) => <BaseBox {...args}>sample</BaseBox>;

export const Primary = Template.bind({});
