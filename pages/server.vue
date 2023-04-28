<template lang="pug">
Header
main.px-8
  h1 server
  p 
Footer
</template>

<script setup lang="ts">
import query from 'source-server-query';

const datas = query.info('46.105.55.3', 27015, 1000).then(console.log);
</script>

<style scoped></style>
