<template>
  <div class="bg-white rounded-lg border border-gray-200 shadow-md w-full">
    <div class="relative overflow-hidden w-full">
      <img
        class="rounded-lg object-cover w-full h-[700px]"
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
  },
  setup() {
    return {}
  },
})
</script>
