import { component$ } from "@builder.io/qwik";
import type { TagType } from "~/types/tag";
import styles from "./tag.module.css";

export type TagProps = {
  name: TagType;
};

export const Tag = component$<TagProps>(({ name }) => {
  return <div class={styles.tag}>{name}</div>;
});
