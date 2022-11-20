<template>
  <div>
    <NavBar />
    <div class="max-w-screen-xl mx-auto mt-10 px-5 xl:px-0">
      <Nuxt />
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import NavBar from '~/components/NavBar.vue'
import AppFooter from '~/components/AppFooter.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { NavBar, AppFooter },
})
</script>
