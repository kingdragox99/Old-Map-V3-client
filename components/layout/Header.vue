<template lang="pug">
header.font-inco.bg-other.flex.flex-col.items-center.px-4.pt-4.md_text-xl
  SideMenu(:isOpen='mobileIsOpen' @close='mobileIsOpen = false')
  .grid.grid-cols-3.mb-3.w-full.lg_grid-cols-5
    a.btn.btn-circle.self-center.lg_hidden(
      aria-label='menu'
      @click='mobileIsOpen = true'
    )
      Menu.w-1of2
    Logo.w-full.self-center.justify-self-center.fill-logo.lg_col-start-3
    .hidden.lg_flex.justify-center.items-baseline.col-start-5
      .dropdown.dropdown-end
        label.btn.border-none.flex.justify-center.items-center.hover_text-primary(
          tabindex='0'
        )
          Icon(name='majesticons:translate' size='1.5rem')
        ul.dropdown-content.menu.p-2.shadow.bg-neutral.rounded-box(
          tabindex='0'
        )
          li.hover_bg-background
            NuxtLink(to='/') English
          li.hover_bg-background
            NuxtLink(to='/fr') Français
      label.swap.swap-rotate.w-14.hover_text-primary(for='modeDesktop')
        input#modeDesktop(
          type='checkbox'
          @click='toggleTheme'
          aria-label='Change mode'
        )
        IconMoon.swap-off.w-6
        IconSun.swap-on.w-6
  .hidden.lg_flex.items-center.pb-2
    nav
      ul.flex.gap-4
        li
          a.text-2xl.text-primary.hover_text-secondary.hover_underline(
            href='#about'
            aria-label='go to about'
            @click='handleClose'
          ) {{ $t('pages.header.about') }}
        li
          a.text-2xl.text-primary.hover_text-secondary.hover_underline(
            href='#experience'
            aria-label='go to experience'
            @click='handleClose'
          ) {{ $t('pages.header.experience') }}
        li
          a.text-2xl.text-primary.hover_text-secondary.hover_underline(
            href='#projects'
            aria-label='go to projects'
            @click='handleClose'
          ) {{ $t('pages.header.projects') }}
        li
          a.text-2xl.text-primary.hover_text-secondary.hover_underline(
            href='#contact'
            aria-label='go to contact'
            @click='handleClose'
          ) {{ $t('pages.header.contact') }}
</template>

<script setup>
import SideMenu from '@/components/layout/SideMenu.vue';
import Logo from '@@/assets/svg/logo-w.svg';
import Menu from '@/assets/icons/menu.svg';
import IconSun from '@/assets/icons/sun.svg';
import IconMoon from '@/assets/icons/moon.svg';

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};

const mobileIsOpen = ref(false);
</script>
