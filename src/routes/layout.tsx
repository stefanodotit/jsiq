import {
  component$,
  createContext,
  Resource,
  useContextProvider,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "./layout.css?inline";
import QuestionsList from "../components/questions/list";
import QuestionsJSON from "../data/questionsJson.json";
import { slugify } from "../utils";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import Answer from "../components/questions/answer";
const questionJson: Question[] = QuestionsJSON;

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

export const onGet: RequestHandler<Question | null> = async ({ params }) => {
  const { slug } = params;
  for (const q of questionJson) {
    if (slugify(q.question) === slug) {
      q.slug = slug;
      return q;
    }
  }
  return null;
};

export const CTX = createContext("mobileMenu");

export default component$(() => {
  const mobileMenuOpened = useStore({ opened: false });
  useContextProvider(CTX, mobileMenuOpened);

  const questionJson: Question[] = QuestionsJSON;
  const questionData = useEndpoint<Question>();
  useStylesScoped$(styles);
  return (
    <main>
      <Header />
      <section>
        <div class="container is-fullhd">
          <div class="columns">
            <Resource
              value={questionData}
              onRejected={() => <div>Error</div>}
              onResolved={(question) => (
                <>
                  <aside
                    class={`column is-3 aside ${
                      mobileMenuOpened.opened ? "" : "is-hidden-mobile"
                    }`}
                  >
                    <QuestionsList data={questionJson} slug={question?.slug} />
                  </aside>
                  <div class="column is-9 answer">
                    {question?.slug && (
                      <Answer
                        data={question.answer}
                        title={question.question}
                      />
                    )}
                    {!question && (
                      <div class="boxPlaceholder">
                        <img src="/old_internet.gif"></img>
                      </div>
                    )}
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
});
