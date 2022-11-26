<template>
  <section class="bg-white">
    <div
      class="gap-16 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16"
    >
      <div class="font-light text-gray-500 sm:text-lg">
        <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Pascal Gangloff, {{ $i18n.t('sculptor') }}
        </h1>

        <p class="mb-4">
          {{ $i18n.t('about.paragraphOne') }}
        </p>
        <p class="mb-4">
          {{ $i18n.t('about.paragraphTwo') }}
        </p>
        <p>
          {{ $i18n.t('about.paragraphThree') }}
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
    <h2 class="mb-8 text-2xl font-bold text-gray-900">
      {{ $i18n.t('about.critics') }}
    </h2>
    <div class="mb-10">
      <ul>
        <li>
          <a :href="`/critic_01_${$i18n.locale}.pdf`" target="_blank">
            André CARCENAC - Raymond SZYMONOWICSZ
          </a>
        </li>
      </ul>
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
