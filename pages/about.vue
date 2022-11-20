<template>
  <section class="bg-white">
    <div
      class="gap-16 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16"
    >
      <div class="font-light text-gray-500 sm:text-lg">
        <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Pascal Gangloff, Sculpteur
        </h1>

        <p class="mb-4">
          Je suis né en 1963 à Mulhouse en Alsace, où je débute la sculpture en
          2000 de façon autodidacte. Fils et petit fils de mineurs, j’ai grandi
          porté par les jardins du bassin minier.
        </p>
        <p class="mb-4">
          Quand je sculpte, je me retrouve dans l’univers printanier de ce
          jadis, du jardin du Paradis, qui cesse alors d’être perdu.
        </p>
        <p>
          Le hasard m’a emmené à Porto Santo à Madère, j’y retrouve ces racines
          indispensables a mon bien être. J’ai plaisir à y vivre et à y
          pratiquer la sculpture animalière, en ces lieux, cela m’y est inspiré.
        </p>
      </div>
      <div class="mt-8">
        <ImageCard
          :image="require(`~/assets/images/about_pascal.jpg`)"
          alt="Pascal Gangloff, sculpting"
          height="500"
        />
      </div>
    </div>
    <h2 class="mb-8 text-2xl font-bold text-gray-900">Critiques Presse</h2>
    <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
      <article class="max-w-xs">
        <a href="#">
          <ImageCard
            image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
            alt="Pascal Gangloff, sculpting"
            height="150"
            class="mb-5"
          />
        </a>
        <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900">
          <a href="#">L'Alsace</a>
        </h2>
      </article>
      <article class="max-w-xs">
        <a href="#">
          <ImageCard
            image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
            alt="Pascal Gangloff, sculpting"
            height="150"
            class="mb-5"
          />
        </a>
        <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900">
          <a href="#">Les DNA</a>
        </h2>
      </article>
      <article class="max-w-xs">
        <a href="#">
          <ImageCard
            image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
            alt="Pascal Gangloff, sculpting"
            height="150"
            class="mb-5"
          />
        </a>
        <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900">
          <a href="#">The Guardian</a>
        </h2>
      </article>
      <article class="max-w-xs">
        <a href="#">
          <ImageCard
            image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
            alt="Pascal Gangloff, sculpting"
            height="150"
            class="mb-5"
          />
        </a>
        <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900">
          <a href="#">Art Journal</a>
        </h2>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ImageCard from '~/components/ImageCard.vue'

export default defineComponent({
  name: 'AboutPage',
  components: { ImageCard },
})
</script>
