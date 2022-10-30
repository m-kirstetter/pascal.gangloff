<template>
  <div class="bg-white rounded-lg border border-gray-200 shadow-md">
    <a href="#">
      <img
        class="rounded-lg object-cover h-[700px] w-full"
        :src="image"
        :alt="alt"
      />
    </a>
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
  },
  setup() {
    return {}
  },
})
</script>
