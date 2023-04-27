<template lang="pug">
Header
main.px-8
  h1.text-2xl.font-bold.text-primary.mb-4.text-center rankings
  table.flex.flex-col.items-center
    tbody.w-full
      tr.grid.grid-cols-3
        th Rank
        th Player
        th Points
      tr.grid.grid-cols-3(v-for='player in players')
        th {{ player.name }}
        th {{ player.rank }}
        th {{ player.point }}
Footer
</template>

<script setup lang="ts">
const players = [
  { name: 'drago', rank: '1', point: '1563' },
  { name: 'Papite', rank: '2', point: '1223' },
  { name: 'Cité', rank: '3', point: '1361' },
  { name: 'Snokz', rank: '4', point: '1493' },
  { name: 'Saitam de la dust 2', rank: '565', point: '1598' },
];
</script>

<style scoped></style>
