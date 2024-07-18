import { QwikCityMockProvider } from "@builder.io/qwik-city";
import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { PostListProps } from "~/components/post-list/post-list";
import { PostList } from "~/components/post-list/post-list";
import type { Post } from "~/types/post";

const meta: Meta<PostListProps> = {
  component: PostList,
};

type Story = StoryObj<PostListProps>;

export default meta;

const posts: Pick<Post, "title" | "createdAt" | "tags" | "href">[] = Array.from(
  { length: 10 },
  (_, index) => ({
    title: `sample${index + 1}`,
    href: `href${index + 1}`,
    createdAt: "2000-01-01",
    tags: Array.from({ length: 3 }, (_, index) => `tag${index + 1}`),
  }),
);

export const Primary: Story = {
  args: {
    posts: [
      {
        title:
          "Labore aute laborum incididunt Lorem.Labore aute laborum incididunt Lorem.",
        href: "sample",
        createdAt: "2024-07-04",
        tags: ["Qwik", "TypeScript", "SSR"],
      },
      ...posts,
    ],
  },
  render: (props) => (
    <QwikCityMockProvider>
      <PostList {...props} />
    </QwikCityMockProvider>
  ),
};
