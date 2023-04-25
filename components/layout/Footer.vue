<template lang="pug">
footer.px-4.py-4
  nav.w-full.mb-4.flex.justify-center
    ul.w-full.flex.justify-evenly.md_w-96
      li
        a.hover_text-primary(
          href='https://github.com/kingdragox99'
          target='_blank'
          aria-label='github account'
        )
          Icon(name='mdi:github-box' size='2.5rem')
      li
        a.hover_text-primary(
          href='https://twitter.com/ArthurLDev'
          target='_blank'
          aria-label='twitter account'
        )
          Icon(name='mdi:twitter-box' size='2.5rem')
      li
        a.hover_text-primary(
          href='https://www.linkedin.com/in/arthur-lefevre/'
          target='_blank'
          aria-label='linkedin account'
        )
          Icon(name='mdi:linkedin' size='2.5rem')
  h2.text-center.font-bold.text-primary.font-inco {{ $t('pages.footer.desc') }}
</template>

<script lang="ts" setup></script>
