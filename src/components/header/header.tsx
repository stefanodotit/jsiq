import { component$, useStylesScoped$ } from "@builder.io/qwik";
// import { QwikLogo } from '../icons/qwik';
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="/">
            <span class="logo_pre">JS</span>
            <span class="logo_post">IQ</span>
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
