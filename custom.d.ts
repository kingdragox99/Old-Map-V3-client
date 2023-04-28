// https://github.com/cpsoinos/nuxt-svgo#usage-with-typescript
declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

declare module 'steamidconverter';
