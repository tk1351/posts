import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <article>
      <Slot />
    </article>
  );
});
