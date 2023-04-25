<template lang="pug">
.w-full.h-full.absolute.z-40.flex.justify-center.items-center.anime-bg.p-10(
  v-if='loading'
)
  Logo.anime-logo
    header.px-4.py-4.bg-other.grid.grid-cols-10.mb-3.w-full.place-items-center.bg-other
      label.btn.btn-circle.drawer-button(for='drawer')
        Menu
      Logo.w-full.fill-logo.col-start-3.col-end-9.sm_w-2of3.lg_w-1of3.xl_w-1of4
Header.xl_px-32.2xl_px-72
main.px-6.py-4.font-inco.xl_px-32.2xl_px-72.2xl_py-8(v-if='loadingEnd')
  section#about.h-auto.w-full.mb-8.flex.flex-col.md_flex-row.justify-center.md_gap-10
    .w-full.md_w-2of3
      h1.font-noto.font-bold.text-xl.text-primary.mb-4.xl_text-3xl {{ $t('pages.home.about.title') }}
      p.mb-8.xl_text-xl
        | {{ $t('pages.home.about.desc_1') }}
        |
        span.text-primary.underline Arthur Lefevre
        | {{ $t('pages.home.about.desc_2') }}
        |
        a.text-primary.underline.hover_text-secondary(
          href='https://becode.org/'
          target='_blank'
          aria-label='go to becode.org'
        ) Becode.org
        |
        | {{ $t('pages.home.about.desc_3') }}
        |
        a.text-primary.underline.hover_text-secondary(
          href='https://vuejs.org/'
          target='_blank'
          aria-label='go to vuejs.org'
        ) Vue.js.
        |
        | {{ $t('pages.home.about.desc_4') }}
      ul.grid.grid-cols-2.mb-8.xl_text-xl
        li.flex.items-center
          Icon.text-primary(name='ic:baseline-arrow-right')
          p JavaScript (ES6+)
        li.flex.items-center
          Icon.text-primary(name='ic:baseline-arrow-right')
          p TypeScript
        li.flex.items-center
          Icon.text-primary(name='ic:baseline-arrow-right')
          p Nuxt.js
        li.flex.items-center
          Icon.text-primary(name='ic:baseline-arrow-right')
          p Node.js
        li.flex.items-center
          Icon.text-primary(name='ic:baseline-arrow-right')
          p Vue.js
        li.flex.items-center
          Icon.text-primary(name='ic:baseline-arrow-right')
          p Tailwind CSS
        li.flex.items-center
          Icon.text-primary(name='ic:baseline-arrow-right')
          p MongoDB
        li.flex.items-center
          Icon.text-primary(name='ic:baseline-arrow-right')
          p Git & Github
    picture.flex.justify-center.items-center.md_w-1of3
      img.rounded-3xl.w-52.h-52.shadow-lg.xl_w-72.xl_h-72(
        src='@@/assets/img/me.webp'
        alt='me'
        width='500'
        height='500'
      )
  section#experience.h-auto.w-full
    h1.font-noto.font-bold.text-xl.text-primary.mb-4.xl_text-3xl {{ $t('pages.home.experience.title') }}
    .carousel.w-full
      #experience1.carousel-item.relative.w-full.flex.flex-col
        p.font-inco.text-primary.font-bold.text-lg.xl_text-2xl
          | {{ $t('pages.home.experience.internship') }}
          |
          span.font-noto.font-bold.text-secondary @ Altab
        p.font-inco.text-sm.mb-4.xl_text-lg {{ $t('pages.home.experience.date_1') }}
        ul
          li.flex.mb-4.xl_text-xl
            Icon.text-primary(name='ic:baseline-arrow-right' size='1.5rem')
            p.w-4of5 {{ $t('pages.home.experience.desc_1') }}
              |
              |
              a.text-primary.underline.hover_text-secondary(
                href='https://www.altab.be/'
                target='_blank'
                aria-label='go to altab.be'
              ) Altab
              | {{ $t('pages.home.experience.desc_2') }}
              |
              a.text-primary.underline.hover_text-secondary(
                href='https://www.verdin.be/'
                target='_blank'
                aria-label='go to verdin.be'
              ) Verdin.be
              |
              | {{ $t('pages.home.experience.desc_2-2') }}
          li.flex.mb-4.xl_text-xl
            Icon.text-primary(name='ic:baseline-arrow-right' size='1.5rem')
            p.w-4of5 {{ $t('pages.home.experience.desc_3') }}

      #experience2.carousel-item.relative.w-full.flex.flex-col
        p.font-inco.text-primary.font-bold.text-lg.xl_text-2xl
          | {{ $t('pages.home.experience.internship') }}
          |
          span.font-noto.font-bold.text-secondary @ Becode.org
        p.font-inco.text-sm.mb-4.xl_text-lg {{ $t('pages.home.experience.date_2') }}
        ul
          li.flex.mb-4.xl_text-xl
            Icon.text-primary(name='ic:baseline-arrow-right' size='1.5rem')
            p.w-4of5
              |
              | {{ $t('pages.home.experience.desc_4') }}
              |
              a.text-primary.underline.hover_text-secondary(
                href='https://becode.org/'
                target='_blank'
                aria-label='go to becode.org'
              ) Becode.org
              | {{ $t('pages.home.experience.desc_5') }}
          li.flex.mb-4.xl_text-xl
            Icon.text-primary(name='ic:baseline-arrow-right' size='1.5rem')
            p.w-4of5 {{ $t('pages.home.experience.desc_6') }}
    .flex.w-full.py-2.gap-2.mb-8
      a.btn.btn-sm.hover_text-primary.xl_btn(
        href='#experience1'
        aria-label='go to experience1'
      ) Altab
      a.btn.btn-sm.hover_text-primary.xl_btn(
        href='#experience2'
        aria-label='go to experience2'
      ) Becode
  section#projects.h-auto.w-full.mb-8
    h1.font-noto.font-bold.text-xl.text-primary.mb-4.xl_text-3xl {{ $t('pages.home.projects.title') }}
    .w-full.hidden.lg_grid.grid-cols-2.gap-4.content-center.items-stretch.xl_grid-cols-3
      .w-full.card.shadow-lg
        figure.w-full.bg-background.rounded-t-3xl.flex.justify-center
          img.object-cover.p-4(
            src='@@/assets/img/verdin.webp'
            alt='verdin.be'
            width='300'
            height='300'
          )
        .w-full.card-body.bg-other.rounded-b-3xl.object-cover
          h4.card-title.font-inco.font-bold.text-xl.text-primary.xl_text-3xl(
            href='https://www.verdin.be/'
            target='_blank'
            aria-label='go to verdin.be'
          ) Verdin.be
          p.xl_text-lg {{ $t('pages.home.projects.verdin') }}
          .flex.gap-2.text-white
            a.flex.group.gap-1.xl_text-lg(
              href='https://www.verdin.be/'
              target='_blank'
              aria-label='go to verdin.be'
            )
              Icon.text-primary.group-hover_text-secondary(
                name='mdi:web-box'
                size='1.5rem'
              )
              p.text-primary.group-hover_text-secondary.hover_underline {{ $t('pages.home.projects.website') }}
          .card-actions.justify-start
            .badge.badge-outline Nuxt.js
            .badge.badge-outline TypeScript
            .badge.badge-outline Tailwind
            .badge.badge-outline i18n
            .badge.badge-outline Vuelidate
      .w-full.card.shadow-lg
        figure.w-full.bg-background.rounded-t-3xl.flex.justify-center
          img.object-cover.p-4(
            src='@@/assets/img/jh.webp'
            alt='Joyce Huberty'
            width='300'
            height='300'
          )
        .w-full.card-body.bg-other.rounded-b-3xl.object-cover
          h4.card-title.font-inco.font-bold.text-xl.text-primary.xl_text-3xl(
            href='http://5.196.7.243:3000/'
            target='_blank'
            aria-label='go to JoyceHuberty.be'
          ) Joyce Huberty
          p.xl_text-lg {{ $t('pages.home.projects.jh') }}
          .flex.gap-2.text-white
            a.flex.group.gap-1.xl_text-lg(
              href='http://5.196.7.243:3000/'
              target='_blank'
              aria-label='go to JoyceHuberty.be'
            )
              Icon.text-primary.group-hover_text-secondary(
                name='mdi:web-box'
                size='1.5rem'
              )
              p.text-primary.group-hover_text-secondary.hover_underline {{ $t('pages.home.projects.website') }}
          .card-actions.justify-start
            .badge.badge-outline Vue.js
            .badge.badge-outline MongoDB
            .badge.badge-outline Express
            .badge.badge-outline Node.js
      .w-full.card.shadow-lg
        figure.w-full.bg-background.rounded-t-3xl.flex.justify-center
          img.object-cover.p-4(
            src='@@/assets/img/BOTDS.webp'
            alt='Vac Ban Checker'
            width='300'
            height='300'
          )
        .w-full.card-body.bg-other.rounded-b-3xl.object-cover
          h4.card-title.font-inco.font-bold.text-xl.text-primary.xl_text-3xl(
            href='https://github.com/kingdragox99/Steam-Ban-Checker-Discord-Bot'
            target='_blank'
            aria-label='go to github repo'
          ) VBC Discord Bot
          p.xl_text-lg {{ $t('pages.home.projects.vbc') }}
          .flex.gap-2.text-white
            a.flex.group.gap-1(
              href='https://github.com/kingdragox99/Steam-Ban-Checker-Discord-Bot'
              target='_blank'
              aria-label='go to github repo'
            )
              Icon.text-primary.group-hover_text-secondary(
                name='mdi:web-box'
                size='1.5rem'
              )
              p.text-primary.group-hover_text-secondary.hover_underline.xl_text-lg {{ $t('pages.home.projects.website') }}
            a.flex.group.gap-1(
              href='https://github.com/kingdragox99/Steam-Ban-Checker-Discord-Bot'
              target='_blank'
              aria-label='go to github repo'
            )
              Icon.text-primary.group-hover_text-secondary(
                name='mdi:github-box'
                size='1.5rem'
              )
              p.text-primary.group-hover_text-secondary.hover_underline.xl_text-lg Github
          .card-actions.justify-start
            .badge.badge-outline Discord.js
            .badge.badge-outline Cheerio.js
            .badge.badge-outline MongoDB
            .badge.badge-outline Node.js
    .carousel.space-x-4.w-full.lg_hidden
      #project1.carousel-item.relative.w-full.flex.flex-col
        figure.bg-background.rounded-t-3xl.flex.justify-center
          img.h-64.w-64(
            src='@@/assets/img/verdin.webp'
            alt='verdin.be'
            width='500'
            height='500'
          )
        .card-body.bg-other.rounded-b-3xl
          a.card-title.font-inco.font-bold.text-xl.text-primary.hover_text-primary.xl_text-3xl(
            href='https://www.verdin.be/'
            target='_blank'
            aria-label='go to verdin.be'
          ) Verdin.be
          p.xl_text-lg {{ $t('pages.home.projects.verdin') }}
          .flex.gap-2.text-white
            a.flex.group.gap-1.xl_text-lg(
              href='https://www.verdin.be/'
              target='_blank'
              aria-label='go to verdin.be'
            )
              Icon.text-primary.group-hover_text-secondary(
                name='mdi:web-box'
                size='1.5rem'
              )
              p.text-primary.group-hover_text-secondary.hover_underline {{ $t('pages.home.projects.website') }}
          .card-actions.justify-start
            .badge.badge-outline Nuxt.js
            .badge.badge-outline TypeScript
            .badge.badge-outline Tailwind
            .badge.badge-outline i18n
            .badge.badge-outline Vuelidate
        .absolute.flex.justify-between.transform.left-2.right-2(
          class='-translate-y-1/2 top-1/4'
        )
          a.btn.btn-circle.w-8.h-8.xl_btn-lg(
            href='#project3'
            aria-label='go to project3'
          )
            Icon.text-secondary(name='ic:outline-arrow-back-ios' size='1rem')
          a.btn.btn-circle.w-8.h-8.xl_btn-lg(
            href='#project2'
            aria-label='go to project2'
          )
            Icon.text-secondary(
              name='ic:outline-arrow-forward-ios'
              size='1rem'
            )
      #project2.carousel-item.relative.w-full.flex.flex-col
        figure.bg-background.rounded-t-3xl.flex.justify-center
          img.h-64.w-64(
            src='@@/assets/img/jh.webp'
            alt='Joyce Huberty'
            width='500'
            height='500'
          )
        .card-body.bg-other.rounded-b-3xl
          a.card-title.font-inco.font-bold.text-xl.text-primary.hover_text-primary.xl_text-3xl(
            href='http://5.196.7.243:3000/'
            target='_blank'
            aria-label='go to JoyceHuberty.be'
          ) Joyce Huberty portfolio
          p.xl_text-lg {{ $t('pages.home.projects.jh') }}
          .flex.gap-2.text-white
            a.flex.group.gap-1.xl_text-lg(
              href='http://5.196.7.243:3000/'
              target='_blank'
              aria-label='go to JoyceHuberty.be'
            )
              Icon.text-primary.group-hover_text-secondary(
                name='mdi:web-box'
                size='1.5rem'
              )
              p.text-primary.group-hover_text-secondary.hover_underline {{ $t('pages.home.projects.website') }}
          .card-actions.justify-start
            .badge.badge-outline Vue.js
            .badge.badge-outline MongoDB
            .badge.badge-outline Express
            .badge.badge-outline Node.js
        .absolute.flex.justify-between.transform.left-2.right-2(
          class='-translate-y-1/2 top-1/4'
        )
          a.btn.btn-circle.w-8.h-8.xl_btn-lg(
            href='#project1'
            aria-label='go to project1'
          )
            Icon.text-secondary(name='ic:outline-arrow-back-ios' size='1rem')
          a.btn.btn-circle.w-8.h-8.xl_btn-lg(
            href='#project3'
            aria-label='go to project3'
          )
            Icon.text-secondary(
              name='ic:outline-arrow-forward-ios'
              size='1rem'
            )
      #project3.carousel-item.relative.w-full.flex.flex-col
        figure.bg-background.rounded-t-3xl.flex.justify-center
          img.h-64.w-64(
            src='@@/assets/img/BOTDS.webp'
            alt='Vac Ban Checker'
            width='500'
            height='500'
          )
        .card-body.bg-other.rounded-b-3xl
          a.card-title.font-inco.font-bold.text-xl.text-primary.hover_text-primary.xl_text-3xl(
            href='https://github.com/kingdragox99/Steam-Ban-Checker-Discord-Bot'
            target='_blank'
            aria-label='go to github repo'
          ) Vac Ban Checker Discord Bot
          p.xl_text-lg {{ $t('pages.home.projects.vbc') }}
          .flex.gap-2.text-white
            a.flex.group.gap-1(
              href='https://github.com/kingdragox99/Steam-Ban-Checker-Discord-Bot'
              target='_blank'
              aria-label='go to github repo'
            )
              Icon.text-primary.group-hover_text-secondary(
                name='mdi:web-box'
                size='1.5rem'
              )
              p.text-primary.group-hover_text-secondary.hover_underline.xl_text-lg {{ $t('pages.home.projects.website') }}
            a.flex.group.gap-1(
              href='https://github.com/kingdragox99/Steam-Ban-Checker-Discord-Bot'
              target='_blank'
              aria-label='go to github repo'
            )
              Icon.text-primary.group-hover_text-secondary(
                name='mdi:github-box'
                size='1.5rem'
              )
              p.text-primary.group-hover_text-secondary.hover_underline.xl_text-lg Github
          .card-actions.justify-start
            .badge.badge-outline Discord.js
            .badge.badge-outline Cheerio.js
            .badge.badge-outline MongoDB
            .badge.badge-outline Node.js
        .absolute.flex.justify-between.transform.left-2.right-2(
          class='-translate-y-1/2 top-1/4'
        )
          a.btn.btn-circle.w-8.h-8.xl_btn-lg(
            href='#project2'
            aria-label='go to project2'
          )
            Icon.text-secondary(name='ic:outline-arrow-back-ios' size='1rem')
          a.btn.btn-circle.w-8.h-8.xl_btn-lg(
            href='#project1'
            aria-label='go to project1'
          )
            Icon.text-secondary(
              name='ic:outline-arrow-forward-ios'
              size='1rem'
            )
  section#contact.w-full.mb-8.mt-4
    h1.font-noto.font-bold.text-xl.text-primary.mb-4.xl_text-3xl {{ $t('pages.home.contact.title') }}
    p.mb-4.xl_text-xl {{ $t('pages.home.contact.desc') }}
    .flex.flex-col.w-full.border-opacity-50
      .grid.grid-cols-2.card.place-items-center.mb-2.xl_grid-cols-4
        img.w-32.lg_w-64.xl_col-start-2(
          src='@@/assets/img/malt.webp'
          alt='malt.com'
          height='400'
          width='400'
        )
        a.btn.hover_text-primary.xl_col-start-3.xl_text-xl(
          href='https://www.malt.fr/profile/arthurlefevre1'
          target='_blank'
          aria-label='go to malt.com'
        ) {{ $t('pages.home.contact.btn_1') }}
      .grid.card
        a.btn.hover_text-primary.lg_btn.xl_text-xl(
          href='mailto:arthur.lefevre.dev@gmail.com'
          aria-label='send me a email'
        ) Email
Footer.font-inco.bg-other(v-if='loadingEnd')
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconSun from '@/assets/icons/sun.svg';
import IconMoon from '@/assets/icons/moon.svg';
import Menu from '@/assets/icons/menu.svg';
import Logo from '@@/assets/svg/logo-w.svg';
const loading = ref(true);
const loadingEnd = ref(false);

const intro = () => {
  loading.value = false;
  loadingEnd.value = true;
};

setTimeout(() => {
  intro();
}, 4000);

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>

<style scoped>
.h-120 {
  height: 32rem;
}
.anime-bg {
  background-color: black;
  animation-name: bg-anime;
  animation-duration: 10s;
  opacity: 1;
}

.anime-logo {
  fill: white;
  animation-name: logo-anime;
  animation-duration: 5s;
  opacity: 1;
}

@keyframes bg-anime {
  0% {
    background-color: rgb(255, 255, 255);
    opacity: 1;
  }
  50% {
    background-color: rgb(0, 0, 0);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes logo-anime {
  0% {
    fill: rgb(0, 0, 0);
    opacity: 1;
  }
  60% {
    fill: rgb(255, 255, 255);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
