import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";
import type { TagType } from "~/types/tag";
import { Tag } from "~/components/tag/tag";
import styles from "./blog.module.css";

export const Blog = component$(() => {
  const { frontmatter, title } = useDocumentHead();
  useStylesScoped$(`
    .content, p {
        color: blue;
    }
  `);
  return (
    <>
      <h1 class={styles.title}>{title}</h1>
      <div>
        <time>{frontmatter.createdAt}</time>
        <ul class={styles.list__tags}>
          {frontmatter.tags.map((tag: TagType) => (
            <li key={tag}>
              <Tag name={tag} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});
