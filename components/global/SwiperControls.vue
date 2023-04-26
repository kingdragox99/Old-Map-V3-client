<template lang="pug">
button(@click='swiper.slideNext()') Next
button(@click='swiper.slidePrev()') Previous
</template>

<script setup lang="ts">
const swiper = useSwiper();
</script>
