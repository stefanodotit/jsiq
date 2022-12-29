import { component$, useClientEffect$, useStyles$ } from "@builder.io/qwik";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
import style from "highlight.js/styles/vs2015.css?inline";
import styleAnswer from "./answer.css?inline";

export default component$((props: { data: string; title: string }) => {
  useStyles$(style);
  useStyles$(styleAnswer);
  useClientEffect$(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("html", html);
    document.querySelectorAll("div.highlight pre").forEach((el: any) => {
      hljs.highlightElement(el);
    });
  });
  return (
    <>
      <h1 class="title answerTitle">{props.title}</h1>
      <div dangerouslySetInnerHTML={props.data}></div>
    </>
  );
});
