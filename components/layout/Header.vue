<template lang="pug">
header.px-4.pt-8.pb-8.mb-4.bg-other
  nav.flex.flex-col.gap-4
    NuxtLink.font-bold.text-center.text-4xl.text-logo(to='/') Old Map
    .flex.gap-2.justify-center
      NuxtLink.btn.btn-xs.self-center(to='/vip') {{ $t('layout.header.btn.vip') }}
      NuxtLink.btn.btn-xs.self-center(to='/rankings') {{ $t('layout.header.btn.rankings') }}
      NuxtLink.btn.btn-xs.self-center(to='/server') {{ $t('layout.header.btn.servers') }}
      .dropdown.dropdown-hover.dropdown-end
        label.btn.btn-xs(tabindex='0') {{ $t('layout.header.btn.more') }}
        ul.dropdown-content.menu.p-2.shadow.bg-other.rounded-box.w-52(
          tabindex='0'
        )
          li.hover_bg-neutral(v-for='link in links' :key='link.to')
            NuxtLink(:to='link.to') {{ link.label }}
</template>

<script setup>
const { t } = useI18n();
// TODO
const links = [
  { to: '/rules', label: t('layout.header.btn.more-list.rules') },
  { to: '/about', label: t('layout.header.btn.more-list.about') },
  { to: '/support', label: t('layout.header.btn.more-list.support') },
  { to: '/pro', label: t('layout.header.btn.more-list.pro') },
];
</script>
