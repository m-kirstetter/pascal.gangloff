<template>
  <div>
    <NavBar />
    <div class="max-w-screen-xl mx-auto flex flex-col gap-5 mt-10 px-5 xl:px-0">
      <div class="flex flex-col lg:flex-row gap-5">
        <ImageCard
          :image="require(`~/assets/images/girafe_01.jpg`)"
          alt="Girafe"
          text="6.000 €"
        />
        <ImageCard
          :image="require(`~/assets/images/bear_01.jpg`)"
          alt="Bear"
          text="6.000 €"
        />
      </div>
      <div class="flex flex-col lg:flex-row gap-5">
        <ImageCard
          :image="require(`~/assets/images/flamingo_01.jpg`)"
          alt="Flamingo"
          text="1.600 €"
        />
        <ImageCard
          :image="require(`~/assets/images/spider_01.jpg`)"
          alt="Spider"
          text="12.000 €"
        />
      </div>
      <div class="flex flex-col lg:flex-row gap-5">
        <ImageCard
          :image="require(`~/assets/images/gorilla_01.jpg`)"
          alt="Gorilla"
        />
        <ImageCard
          :image="require(`~/assets/images/sheep_01.jpg`)"
          alt="Sheep"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import NavBar from '~/components/NavBar.vue'
import ImageCard from '~/components/ImageCard.vue'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { NavBar, ImageCard, Footer },
})
</script>
