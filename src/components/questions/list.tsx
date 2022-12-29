import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Question } from "../../routes/question/[slug]";
import { slugify } from "../../utils";
import styles from "./list.css?inline";

export default component$(
  (props: { data: Question[]; slug: string | undefined }) => {
    const questions = props.data;
    const slug = props.slug;
    useStylesScoped$(styles);
    return (
      <div class="menu">
        <p class="menu-label is-size-5">Questions</p>
        <ul class="menu-list">
          {questions.map((question) => (
            <li>
              <a
                class={
                  slug && slugify(question.question) == slug ? "is-active" : ""
                }
                href={`/question/${slugify(question.question)}`}
              >
                {question.question}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
