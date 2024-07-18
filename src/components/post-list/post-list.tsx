import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Post } from "~/types/post";
import styles from "./post-list.module.css";
import { Tag } from "~/components/tag/tag";

export type PostListProps = {
  posts: Pick<Post, "title" | "createdAt" | "tags" | "href">[];
};

export const PostList = component$<PostListProps>(({ posts }) => {
  return (
    <ul class={styles.list}>
      {posts.map(({ title, createdAt, tags, href }) => (
        <li key={title}>
          <article>
            <section class={styles.title__section}>
              <Link href={`/post/${href}`}>
                <h2 class={styles.title}>{title}</h2>
              </Link>
            </section>
            <section>
              <time>{createdAt}</time>
              <ul class={styles.list__tags}>
                {tags.map((tag) => (
                  <li key={tag}>
                    <Tag name={tag} />
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </li>
      ))}
    </ul>
  );
});
