<template lang="pug">
Header
main
  .w-full.px-4.py-16
    .mx-auto.w-full.max-w-md
      RadioGroup(v-model='selected')
        RadioGroupLabel.sr-only Server size
        .space-y-2
          RadioGroupOption(as='template' v-for='plan in plans' :key='plan.name' :value='plan' v-slot='{ active, checked }')
            .relative.flex.cursor-pointer.rounded-lg.px-5.py-4.shadow-md(:class="[\
            active\
            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'\
            : '',\
            checked ? 'bg-sky-900 bg-opacity-75 text-white ' : 'bg-white ',\
            ]" class='focus:outline-none')
              .flex.w-full.items-center.justify-between
                .flex.items-center
                  .text-sm
                    RadioGroupLabel.font-medium(as='p' :class="checked ? 'text-white' : 'text-gray-900'")
                      | {{ plan.name }}
                    RadioGroupDescription.inline(as='span' :class="checked ? 'text-sky-100' : 'text-gray-500'")
                      span  {{ plan.ram }}/{{ plan.cpus }}
                      span(aria-hidden='true')  &middot; 
                      span {{ plan.disk }}
                .shrink-0.text-white(v-show='checked')
                  svg.h-6.w-6(viewbox='0 0 24 24' fill='none')
                    circle(cx='12' cy='12' r='12' fill='#fff' fill-opacity='0.2')
                    path(d='M7 13l3 3 7-7' stroke='#fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')

Footer
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue'

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]

const selected = ref(plans[0])
</script>

<style scoped></style>
