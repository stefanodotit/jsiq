import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return <footer>Made with <img height="20px" width="20px" src="/hearth.gif" /></footer>;
});
