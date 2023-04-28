<template lang="pug">
Header
main.px-4
  article.flex.flex-col.w-full.bg-background.rounded.p-1.mb-4
    section.p-5.flex.flex-col
      h1.text-2xl.font-bold.text-primary.mb-2 OLD MAP
      p.mb-4.text-logo {{ $t('pages.home.article.desc') }}
      NuxtLink.btn.btn-wide.btn-sm.self-center.bg-error.text-logo(to='/vip') {{ $t('layout.header.btn.vip') }}
    section
      Swiper(
        :modules='[SwiperAutoplay, SwiperNavigation]'
        :slides-per-view='1'
        :space-between='50'
        :loop='true'
        :autoplay='{ delay: 8000, disableOnInteraction: true }'
      )
        swiper-slide
          img.rounded(src='@@/assets/img/csgo-img.jpg' alt='csgo')
        swiper-slide
          img.rounded(src='@@/assets/img/csgo-img-2.jpg' alt='csgo')
        SwiperControls
  article.bg-background.rounded.p-1.mb-4
    section.p-5.flex.flex-col
      h1.text-2xl.font-bold.text-primary.mb-2 {{ $t('pages.home.article.vip.title') }}
      ul.mb-4.text-logo
        li {{ $t('pages.home.article.vip.1') }}
        li {{ $t('pages.home.article.vip.2') }}
        li {{ $t('pages.home.article.vip.3') }}
        li {{ $t('pages.home.article.vip.4') }}
        li {{ $t('pages.home.article.vip.5') }}
      NuxtLink.btn.btn-wide.btn-sm.self-center.bg-error.text-logo(to='/vip') {{ $t('layout.header.btn.vip') }}
  article.flex.flex-col.w-full.bg-background.rounded.p-1.mb-4
    section
      Swiper(
        :modules='[SwiperAutoplay, SwiperNavigation]'
        :slides-per-view='1'
        :space-between='50'
        :loop='true'
        :autoplay='{ delay: 8000, disableOnInteraction: true }'
      )
        swiper-slide(v-for='event in events' :key='event.href')
          h1.text-2xl.font-bold.text-primary.mb-2.text-center.uppercase {{ event.title }}
          NuxtLink(:to='event.href')
            img.rounded(:src='event.img' alt='csgo')
        SwiperControls
Footer
</template>

<script setup lang="ts">
const { t } = useI18n();

interface Events {
  href: string;
  title: string;
  img: string;
}

// TODO NEWS
const events: Events[] = [
  {
    href: 'http://www.pickuptasoeur.fr',
    title: 'Fake News',
    img: '/img/csgo-img.jpg',
  },
  {
    href: 'http://www.pickuptasoeur.fr',
    title: 'Fake News 2',
    img: '/img/csgo-img-2.jpg',
  },
];
</script>

<style scoped></style>
