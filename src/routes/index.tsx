import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <></>
});

export const head: DocumentHead<string> = () => {
  return {
    title: "Javascript Interview Question",
  };
};
