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
  article.bg-background.rounded.p-1
    section.p-5.flex.flex-col
      h1.text-2xl.font-bold.text-primary.mb-2 VIP BENEFITS
      ul.mb-4.text-logo
        li Reserved Slots
        li Unlimited Access
        li Access to Restricted Weapons
        li Voting Rights & Immunity
        li And more ..
      NuxtLink.btn.btn-wide.btn-sm.self-center.bg-error.text-logo(to='/vip') {{ $t('layout.header.btn.vip') }}
Footer
</template>

<script setup lang="ts"></script>

<style scoped></style>
