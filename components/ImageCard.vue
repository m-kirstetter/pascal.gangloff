<template>
  <div
    class="bg-white rounded-lg border border-gray-200 shadow-md w-full h-full"
  >
    <div class="relative overflow-hidden w-full h-full">
      <img
        class="rounded-lg object-cover w-full h-full"
        :src="image"
        :alt="alt"
      />
      <VideoIcon
        v-if="video"
        class="absolute bottom-4 left-5 w-12 h-12 text-white"
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
import VideoIcon from '~/assets/icons/video.svg'

export default defineComponent({
  name: 'ImageCard',
  components: { VideoIcon },
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
    video: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup() {
    return {}
  },
})
</script>
