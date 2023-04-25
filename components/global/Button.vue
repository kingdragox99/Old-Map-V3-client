<template lang="pug">
// TODO
button.inline-flex.items-center.justify-center.rounded-md.border.border-transparent.bg-primary.px-5.py-3.text-base.font-medium.text-white
  slot
</template>

<script lang="ts" setup>
interface Props {
  variant:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  href?: string;
  to?: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped></style>
