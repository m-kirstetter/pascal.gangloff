<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col lg:flex-row gap-5 lg:h-[600px]">
      <div>
        <ImageCard
          :image="require(`~/assets/images/girafe_01.jpg`)"
          alt="Girafe"
        />
      </div>
      <a href="https://youtube.com/watch?v=tdMzICXoX2s" target="_blank">
        <ImageCard
          :image="require(`~/assets/images/bear_01.jpg`)"
          alt="Bear"
          text="4.000 €"
          video
        />
      </a>
    </div>
    <div class="flex flex-col lg:flex-row gap-5 lg:h-[600px]">
      <div>
        <ImageCard
          :image="require(`~/assets/images/flamingo_01.jpg`)"
          alt="Flamingo"
          text="1.000 €"
          height="300"
        />
      </div>
      <a href="https://youtu.be/58QhxiYThFM" target="_blank">
        <ImageCard
          :image="require(`~/assets/images/spider_01.jpg`)"
          alt="Spider"
          text="12.000 €"
          height="300"
          video
        />
      </a>
    </div>
    <div class="flex flex-col lg:flex-row gap-5 lg:h-[500px]">
      <ImageCard
        :image="require(`~/assets/images/gorilla_01.jpg`)"
        alt="Gorilla"
      />
      <ImageCard :image="require(`~/assets/images/sheep_01.jpg`)" alt="Sheep" />
    </div>
    <div class="flex flex-col lg:flex-row gap-5 lg:h-[700px]">
      <ImageCard
        :image="require(`~/assets/images/pegase_01.jpg`)"
        alt="Pegase"
      />
      <ImageCard
        :image="require(`~/assets/images/femme_girafe_01.jpg`)"
        alt="Femme Girafe"
      />
    </div>
    <div class="flex flex-col lg:flex-row gap-5 lg:h-[500px]">
      <ImageCard
        :image="require(`~/assets/images/black_panther_01.jpg`)"
        alt="Black Panther"
      />
      <ImageCard :image="require(`~/assets/images/cat_01.jpg`)" alt="Cat" />
    </div>
    <div class="flex flex-col lg:flex-row gap-5 lg:h-[500px]">
      <ImageCard
        :image="require(`~/assets/images/panther_01.jpg`)"
        alt="Panther"
      />
      <ImageCard
        :image="require(`~/assets/images/mais_man_01.jpg`)"
        alt="Mais Man"
      />
    </div>
    <div class="flex flex-col lg:flex-row gap-5 lg:h-[800px]">
      <ImageCard
        :image="require(`~/assets/images/homme_fleur_01.jpg`)"
        alt="Homme Fleur"
      />
      <ImageCard
        :image="require(`~/assets/images/pascal_01.jpg`)"
        alt="Pascal"
      />
    </div>
    <div class="flex flex-col lg:flex-row gap-5 lg:h-[800px]">
      <ImageCard
        :image="require(`~/assets/images/couple_01.jpg`)"
        alt="Couple"
      />
      <ImageCard
        :image="require(`~/assets/images/cocoon_01.jpg`)"
        alt="Cocoon"
      />
    </div>
    <div class="flex flex-col lg:flex-row gap-5 lg:h-[800px]">
      <ImageCard :image="require(`~/assets/images/katia_01.jpg`)" alt="Katia" />
      <ImageCard
        :image="require(`~/assets/images/baiser_01.jpg`)"
        alt="Baiser"
      />
    </div>
    <div class="flex flex-col lg:flex-row gap-5 lg:h-[800px]">
      <ImageCard :image="require(`~/assets/images/grace_01.jpg`)" alt="Grace" />
      <ImageCard
        :image="require(`~/assets/images/printemps_01.jpg`)"
        alt="Printemps"
      />
    </div>
    <div class="flex flex-col lg:flex-row gap-5">
      <ImageCard
        :image="require(`~/assets/images/renouveau_01.jpg`)"
        alt="Renouveau"
      />
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
