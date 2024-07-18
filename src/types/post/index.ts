import type { TagType } from "~/types/tag";

export type Post = {
  title: string;
  content: string;
  createdAt: string;
  href: string;
  isDraft: boolean;
  tags: TagType[];
};
