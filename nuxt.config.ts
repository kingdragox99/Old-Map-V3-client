import svgLoader from 'vite-svg-loader';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#app
  app: {
    head: {
      title: 'OLD MAP',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            "Hello, I'm Arthur Lefevre, a junior web developer from Belgium. I completed a training course at Becode.org to hone my skills. My expertise lies in front-end development, using Vue.js. I have a strong understanding of HTML, CSS and JavaScript. I'm passionate about creating interactive and user-friendly web applications.",
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://arthur-lefevre.dev/',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Arthur Lefevre',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Hello, I'm Arthur Lefevre, a junior web developer from Belgium. I completed a training course at Becode.org to hone my skills. My expertise lies in front-end development, using Vue.js. I have a strong understanding of HTML, CSS and JavaScript. I'm passionate about creating interactive and user-friendly web applications.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://i.imgur.com/5741C19.png',
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: 'https://arthur-lefevre.dev/',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Arthur Lefevre',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content:
            "Hello, I'm Arthur Lefevre, a junior web developer from Belgium. I completed a training course at Becode.org to hone my skills. My expertise lies in front-end development, using Vue.js. I have a strong understanding of HTML, CSS and JavaScript. I'm passionate about creating interactive and user-friendly web applications.",
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://i.imgur.com/5741C19.png',
        },
        { name: 'twitter:site', content: '@ArthurLDev' },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#components
  components: {
    dirs: [
      {
        path: '~/components',
        global: false,
        pathPrefix: false,
        watch: true,
      },
      {
        path: '~/components/global',
        global: true,
      },
    ],
  },

  css: ['@/assets/css/color-mode-themes.css', '@/assets/scss/main.scss'],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#plugins-1
  plugins: [],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-simple-sitemap',
    'nuxt-swiper',
  ],

  // vite config https://v3.nuxtjs.org/api/configuration/nuxt-config#vite
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
        defaultImport: 'component',
      }),
      wasm(),
      topLevelAwait(),
    ],
  },

  // Config I18n https://v8.i18n.nuxtjs.org
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang',
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
        name: 'English',
        iso: 'us',
        flag: 'flagpack:us',
      },
      {
        code: 'fr',
        file: 'fr-FR.json',
        name: 'Français',
        iso: 'fr',
        flag: 'flagpack:fr',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: false,
      cookieCrossOrigin: false,
      fallbackLocale: '',
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  // Config Color Mode https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'dark', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },

  build: {
    transpile: ['@headlessui/vue'],
  },

  // https://nitro.unjs.io/config
  nitro: {
    minify: true,
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/en'],
    },
  },
  sitemap: {
    hostname: 'https://www.arthur-lefevre.dev',
  },

  // Config Google Font https://google-fonts.nuxtjs.org
  googleFonts: {
    families: {
      Roboto: true,
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
});
