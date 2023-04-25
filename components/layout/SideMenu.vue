<template lang="pug">
.absolute
  TransitionRoot(:show='isOpen' as='template')
    Dialog.relative.z-10(as='div' @close='handleClose')
      TransitionChild(
        as='template'
        enter='ease-in-out duration-500'
        enter-from='opacity-0'
        enter-to='opacity-100'
        leave='ease-in-out duration-500'
        leave-from='opacity-100'
        leave-to='opacity-0'
      )
        .fixed.inset-0.bg-gray-500.bg-opacity-75.transition-opacity
      .fixed.inset-0.overflow-hidden
        .absolute.inset-0.overflow-hidden
          .pointer-events-none.fixed.inset-y-0.right-0.flex.max-w-full.pl-10
            TransitionChild(
              as='template'
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enter-from='translate-x-full'
              enter-to='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leave-from='translate-x-0'
              leave-to='translate-x-full'
            )
              DialogPanel.pointer-events-auto.w-screen.max-w-md
                .flex.h-full.flex-col.bg-other.p-4.shadow-xl
                  .grid.grid-cols-3.place-items-end
                    Logo.fill-logo.col-span-2
                    a.btn.btn-circle.self-center(
                      aria-label='close menu'
                      @click='handleClose'
                    )
                      Cross.w-1of2
                  nav.mt-4
                    ul
                      li.mb-4
                        a.btn.w-full.text-lg.bg-neutral.hover_bg-background(
                          href='#about'
                          aria-label='go to about'
                          @click='handleClose'
                        ) {{ $t('pages.header.about') }}
                      li.mb-4
                        a.btn.w-full.text-lg.bg-neutral.hover_bg-background(
                          href='#experience'
                          aria-label='go to experience'
                          @click='handleClose'
                        ) {{ $t('pages.header.experience') }}
                      li.mb-4
                        a.btn.w-full.text-lg.bg-neutral.hover_bg-background(
                          href='#projects'
                          aria-label='go to projects'
                          @click='handleClose'
                        ) {{ $t('pages.header.projects') }}
                      li.mb-4
                        a.btn.w-full.text-lg.bg-neutral.hover_bg-background(
                          href='#contact'
                          aria-label='go to contact'
                          @click='handleClose'
                        ) {{ $t('pages.header.contact') }}
                  .flex.justify-center
                    .dropdown.dropdown-end
                      label.btn.border-none.flex.justify-center.items-center.hover_text-primary(
                        tabindex='0'
                      )
                        Icon(name='majesticons:translate' size='1.5rem')
                      ul.dropdown-content.menu.p-2.shadow.bg-neutral.rounded-box.w-52(
                        tabindex='0'
                      )
                        li.hover_bg-background
                          NuxtLink(to='/') English
                        li.hover_bg-background
                          NuxtLink(to='/fr') Français
                    label.swap.swap-rotate.w-14.hover_text-primary(for='mode')
                      input#mode(
                        type='checkbox'
                        @click='toggleTheme'
                        aria-label='Change mode'
                      )
                      IconMoon.swap-off.w-6
                      IconSun.swap-on.w-6
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import Logo from '@@/assets/svg/logo-w.svg';
import Cross from '@/assets/icons/cross.svg';
import IconSun from '@/assets/icons/sun.svg';
import IconMoon from '@/assets/icons/moon.svg';

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};

interface Props {
  isOpen: boolean;
}

defineProps<Props>();
const emits = defineEmits(['close']);

const handleClose = () => {
  emits('close');
};

// TODO

const entreprises = ref([
  {
    name: 'Permalife S.A.',
    tva: 'BE0458987765',
  },
  {
    name: 'Agoref SPRL',
    tva: 'BE0458987765',
  },
  {
    name: 'Permalife S.A.',
    tva: 'BE0458987765',
  },
  {
    name: 'Permalife S.A.',
    tva: 'BE0458987765',
  },
]);

// TODO

const notifications = [
  {
    notification:
      'Bienvenue! Vous serez notifié losqu’une opération nécéssitera votre participation.',
    time: 'une minute',
  },
  {
    notification: 'Le test de la notification ',
    time: 'une heur',
  },
  {
    notification:
      'Bienvenue! Vous serez notifié losqu’une opération nécéssitera votre participation.',
    time: 'un jour',
  },
];
</script>

<style lang="scss" scoped></style>
