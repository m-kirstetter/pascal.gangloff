<template>
  <div>
    <NavBar />
    <div class="max-w-screen-xl mx-auto flex gap-5 mt-10">
      <div class="w-1/2">
        <ImageCard
          :image="require(`~/assets/images/girafe_01.jpg`)"
          alt="Girafe"
        />
      </div>
      <div class="w-1/2">
        <ImageCard
          :image="require(`~/assets/images/girafe_01.jpg`)"
          alt="Girafe"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import NavBar from '~/components/NavBar.vue'
import ImageCard from '~/components/ImageCard.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { NavBar, ImageCard },
})
</script>
