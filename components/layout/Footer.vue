<template lang="pug">
footer.p-4.bg-other
  .flex.justify-around
    .w-1of2.flex.flex-col.text-center.justify-center.text-primary
      a(href='https://www.arthur-lefevre.dev') Made by
        h2.font-bold Arthur-Lefevre.dev
    .w-1of2.flex.flex-col.justify-center.items-center
      Stripe.fill-primary.w-2of3
</template>

<script lang="ts" setup>
import Stripe from '@/assets/svg/stripe.svg';
</script>
