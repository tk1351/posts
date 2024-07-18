import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { TagProps } from "~/components/tag/tag";
import { Tag } from "~/components/tag/tag";

const meta: Meta<TagProps> = {
  component: Tag,
};

type Story = StoryObj<TagProps>;

export default meta;

export const Primary: Story = {
  args: {
    name: "Qwik",
  },
  render: (props) => <Tag {...props} />,
};
