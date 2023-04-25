import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

const app = createApp(App);

const i18n = createI18n({
  locale: "fr",
  fallbackLocale: "en",
});

app.use(i18n);
app.use(router);

app.mount("#app");
