<template lang="pug">
Header
main.px-4
  h1.text-2xl.font-bold.text-primary.mb-4.text-center SERVER
  .grid.grid-cols-2.gap-2.mb-4
    .flex.flex-col.gap-2.items-center(
      v-for='server in servers'
      :key='server.ip'
    )
      a(
        :href='`https://www.gametracker.com/server_info/${server.ip}/`'
        target='_blank'
      )
        img(
          :src='`https://cache.gametracker.com/server_info/${server.ip}/b_160_400_1_ffffff_c5c5c5_ffffff_000000_1_1_0.png`'
          alt=''
        )
      NuxtLink.btn.btn-sm.w-full(:to='`steam://connect/${server.ip}`') Direct connect
      button.btn.btn-sm.w-full(@click='copy(server.ip)') copy
Footer
</template>

<script setup lang="ts">
interface Server {
  ip: string;
}

const copy = (e: string) => {
  navigator.clipboard.writeText(e);
};

const servers: Server[] = [
  { ip: '46.105.55.3:27015' },
  { ip: '164.132.207.156:28117' },
  { ip: '150.230.71.228:27015' },
];

// import query from 'source-server-query';

// const datas = query.info('46.105.55.3', 27015, 1000);
</script>

<style scoped></style>
