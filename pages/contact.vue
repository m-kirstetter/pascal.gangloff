<template>
  <div class="flex flex-col gap-5">
    <Typeform
      url="https://redefyne.typeform.com/to/rIqSheE2"
      hide-headers
      hide-footer
      :button-text="$i18n.t('contact.submit')"
      :on-submit="homeRedirect"
      :opacity="0"
      class="h-[600px]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const { localePath } = useContext()
    const router = useRouter()

    return {
      homeRedirect: () => router.push(localePath('')),
    }
  },
})
</script>
