<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
      <div
        class="flex flex-wrap justify-between items-start mx-auto max-w-screen-xl"
      >
        <nuxt-link :to="localePath('/')" class="flex items-center">
          <span
            class="self-center text-xl font-semibold whitespace-nowrap flex flex-col sm:flex-row gap-1 sm:gap-3"
          >
            <span>Pascal Gangloff</span>
            <span class="text-gray-400 text-lg">{{ $i18n.t('sculptor') }}</span>
          </span>
        </nuxt-link>
        <div class="flex items-center lg:order-2">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown"
            class="inline-flex items-center text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 lg:px-5 py-2.5 focus:outline-none"
          >
            {{ $i18n.localeProperties.fullName }}
            <svg
              class="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <!-- Dropdown -->
          <div
            id="language-dropdown"
            class="hidden z-50 my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
          >
            <ul
              v-for="lang in $i18n.availableLocales.filter(
                (i) => i !== $i18n.locale
              )"
              :key="`lang-${lang}`"
              class="py-1"
              role="none"
            >
              <li>
                <nuxt-link
                  :to="switchLocalePath(lang)"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    {{ getLocale(lang)?.fullName }}
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-search"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-search"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu-search"
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <nuxt-link
                :to="localePath('about')"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 lg:hover:text-primary-700 lg:p-0"
              >
                {{ $i18n.t('menu.about') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath('contact')"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 lg:hover:text-primary-700 lg:p-0"
              >
                {{ $i18n.t('menu.contact') }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { LocaleObject } from '@nuxtjs/i18n'

export default defineComponent({
  name: 'NavBar',
  components: {},
  setup() {
    const { i18n } = useContext()
    return {
      getLocale: (locale: string) =>
        (i18n.locales as LocaleObject[]).find(
          (i: LocaleObject) => i.code === locale
        ),
    }
  },
})
</script>
