import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

const app = createApp(App);

const i18n = createI18n({
  globalInjection: true,
  strategy: "prefix_except_default",
  defaultLocale: "en",
  lazy: true,
  langDir: "./src/lang",
  locales: [
    {
      code: "en",
      file: "en-US.json",
      name: "English",
      iso: "us",
      flag: "flagpack:us",
    },
    {
      code: "fr",
      file: "fr-FR.json",
      name: "Français",
      iso: "fr",
      flag: "flagpack:fr",
    },
  ],
  vueI18n: {
    legacy: false,
    fallbackLocale: "en",
  },
});

app.use(i18n);
app.use(router);

app.mount("#app");
