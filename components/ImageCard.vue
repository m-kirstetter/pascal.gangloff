<template>
  <div
    class="bg-white rounded-lg border border-gray-200 shadow-md relative overflow-hidden w-full"
  >
    <img
      class="rounded-lg object-cover w-full"
      :class="`h-[${height}px]`"
      :src="image"
      :alt="alt"
    />
    <span
      v-if="text.length"
      class="absolute text-5xl text-white bottom-5 right-5"
    >
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ImageCard',
  components: {},
  props: {
    image: {
      type: String as PropType<string>,
      required: true,
    },
    alt: {
      type: String as PropType<string>,
      required: true,
    },
    text: {
      type: String as PropType<string>,
      default: '',
    },
    height: {
      type: String as PropType<string>,
      default: '700',
    },
  },
  setup() {
    return {}
  },
})
</script>
