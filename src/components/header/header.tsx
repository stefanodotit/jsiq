import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { CTX } from "../../routes/layout";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const mobileMenuOpened = useContext(CTX);

  return (
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="/">
            <span class="logo_pre">JS</span>
            <span class="logo_post">IQ</span>
          </a>
          <a
            onClick$={() =>
              (mobileMenuOpened.opened = !mobileMenuOpened.opened)
            }
            role="button"
            class="navbar-burger is-hidden-tablet"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <a
                class="github-button"
                href="https://github.com/stefanodotit/jsiq"
                data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star stefanodotit/jsiq on GitHub"
              >
                Star
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});
