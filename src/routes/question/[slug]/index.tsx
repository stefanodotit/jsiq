import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Answer from "../../../components/questions/answer";
import styles from "./index.css?inline";

export type Question = {
  question: string;
  answer: string;
  categories: {
    name: string;
    id: number;
  }[];
  id: number;
  slug?: string;
};

export default component$((props: { answer: string; question: string }) => {
  useStylesScoped$(styles);
  return <Answer data={props.answer} title={props.question} />;
});

export const head: DocumentHead<Question> = ({data}) => {
  return {
    title: `Javascript Interview Question - ${data.question}`,
  };
};
