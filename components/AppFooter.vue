<template>
  <footer
    class="bg-white sm:flex sm:items-center sm:justify-between py-4 sm:py-6 xl:py-8 mx-auto max-w-screen-xl"
  >
    <p
      class="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0"
    >
      &copy; 2022
      <a href="/" class="hover:underline" target="_blank"> Pascal Gangloff </a>
      - All rights reserved.
    </p>
    <div class="flex justify-center items-center space-x-1">
      <a
        href="http://www.facebook.com/Pascal-Gangloff-Sculpteur-264155560455248"
        data-tooltip-target="tooltip-facebook"
        class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">Facebook</span>
      </a>
      <div
        id="tooltip-facebook"
        role="tooltip"
        class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
      >
        Like us on Facebook
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppFooter',
  components: {},
  props: {},
  setup() {
    return {}
  },
})
</script>
