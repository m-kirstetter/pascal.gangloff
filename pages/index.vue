<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col lg:flex-row gap-5">
      <nuxt-link to="/contact">
        <ImageCard
          :image="require(`~/assets/images/girafe_01.jpg`)"
          alt="Girafe"
          text="6.000 €"
        />
      </nuxt-link>
      <nuxt-link to="/contact">
        <ImageCard
          :image="require(`~/assets/images/bear_01.jpg`)"
          alt="Bear"
          text="6.000 €"
        />
      </nuxt-link>
    </div>
    <div class="flex flex-col lg:flex-row gap-5">
      <nuxt-link to="/contact">
        <ImageCard
          :image="require(`~/assets/images/flamingo_01.jpg`)"
          alt="Flamingo"
          text="1.600 €"
        />
      </nuxt-link>
      <nuxt-link to="/contact">
        <ImageCard
          :image="require(`~/assets/images/spider_01.jpg`)"
          alt="Spider"
          text="12.000 €"
        />
      </nuxt-link>
    </div>
    <div class="flex flex-col lg:flex-row gap-5">
      <nuxt-link to="/contact">
        <ImageCard
          :image="require(`~/assets/images/gorilla_01.jpg`)"
          alt="Gorilla"
        />
      </nuxt-link>
      <nuxt-link to="/contact">
        <ImageCard
          :image="require(`~/assets/images/sheep_01.jpg`)"
          alt="Sheep"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ImageCard from '~/components/ImageCard.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { ImageCard },
})
</script>
