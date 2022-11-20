<template>
  <div class="flex flex-col gap-5">
    <h1>Contact</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ImageCard from '~/components/ImageCard.vue'

export default defineComponent({
  name: 'ContactPage',
  components: { ImageCard },
})
</script>
