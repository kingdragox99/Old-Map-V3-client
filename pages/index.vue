<template lang="pug">
Header
main.px-4
  article.flex.flex-col.gap-4.w-full.bg-background.rounded.p-1
    section.p-5
      h1.text-2xl.font-bold.text-primary.mb-4 Old Map
      p We started in 2021 with developing and hosting Retake 128tick servers. During the last years we've been continuously working on making the servers better. Huge thanks from our side for supporting our service by ordering [VIP]. See you on the server!
    section
      Swiper(
        :modules='[SwiperAutoplay, SwiperNavigation]'
        :slides-per-view='1'
        :space-between='50'
        :loop='true'
        :autoplay='{ delay: 8000, disableOnInteraction: true }'
      )
        swiper-slide
          img(src='@@/assets/img/csgo-img.jpg' alt='csgo')
        swiper-slide
          img(src='@@/assets/img/csgo-img.jpg' alt='csgo')
        SwiperControls
Footer
</template>

<script setup lang="ts"></script>

<style scoped></style>
