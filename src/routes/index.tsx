import { component$ } from "@builder.io/qwik";
import type { DocumentHead, DocumentHeadProps } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { PostList } from "~/components/post-list/post-list";
import type { Post } from "~/types/post";

export const usePosts = routeLoader$(async () => {
  const mdxComponents: Record<string, any> = import.meta.glob(
    "/src/routes/post/**/index.mdx",
  );

  const posts = await Promise.all(
    Object.keys(mdxComponents).map(async (path) => {
      const document = (await mdxComponents[path]()) as DocumentHeadProps;
      const href = path.match(/\/([^/]+)\/index\.mdx$/);
      return {
        title: document.head.title,
        href: `${href ? href[1] : ""}`,
        createdAt: document.head.frontmatter.createdAt as string,
        tags: document.head.frontmatter.tags,
      };
    }),
  );

  return posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  ) as Pick<Post, "title" | "createdAt" | "tags" | "href">[];
});

export default component$(() => {
  const posts = usePosts();
  return (
    <>
      <PostList posts={posts.value} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Posts",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
