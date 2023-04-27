<template lang="pug">
.flex.justify-around.m-1
  button(@click='swiper.slideNext()')
    Icon.text-logo.hover_text-primary(name='charm:arrow-left' size='1.5rem')
  button(@click='swiper.slidePrev()')
    Icon.text-logo.hover_text-primary(name='charm:arrow-right' size='1.5rem')
</template>

<script setup lang="ts">
const swiper = useSwiper();
</script>
