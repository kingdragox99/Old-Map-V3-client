<template lang="pug">
Header
main.px-4
  h1.text-2xl.font-bold.text-primary.mb-4.text-center RANKINGS
  table.flex.flex-col.items-center
    tbody.w-full
      tr.grid.grid-cols-3.mb-2.bg-other.rounded.border-2.border-primary
        th.self-center Rank
        th.self-center Player
        th.self-center scores
      tr.grid.grid-cols-3.mb-2.bg-other.rounded.border-2.border-primary.text-logo(
        v-for='player in rankedPlayers'
        :key='player.name'
      )
        th.self-center {{ player.rank }}
        th.self-center
          NuxtLink(:to='player.link') {{ player.name }}
        th.self-center {{ player.score }}
Footer.fixed.bottom-0.left-0
</template>

<script setup lang="ts">
import { tidy, arrange } from '@tidyjs/tidy';
import SteamIDConverter from 'steamidconverter';

interface Player {
  steam: string;
  name: string;
  score: number;
  rank?: number;
  link?: string;
}

// TODO Fetch datas from db

const players: Player[] = [
  { steam: 'STEAM_1:0:94013512', name: 'drago', score: 1455 },
  { steam: 'STEAM_1:0:148052692', name: 'Papite', score: 1329 },
  { steam: 'STEAM_1:0:89078739', name: 'Citelis', score: 1652 },
  { steam: 'STEAM_1:1:25514164', name: 'timtimm__', score: 1611 },
  { steam: 'STEAM_1:0:83556469', name: 'lopomo19', score: 1517 },
];

// stored the row datas from Players array

const playersStored = tidy(
  players,
  arrange((a, b) => b.score - a.score),
);

// after stored datas we add a rank from top to bottom and add link to profil

const rankedPlayers = playersStored.map((player, index) => ({
  ...player,
  rank: index + 1,
  link: SteamIDConverter.profileURL(player.steam),
}));
</script>

<style scoped></style>
