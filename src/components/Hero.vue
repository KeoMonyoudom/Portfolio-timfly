<template>
  <div class="bg-[url('@/assets/images/profile.png')] bg-cover bg-center w-center min-h-200 flex items-center justify-center">
      <div class="text-center z-10 px-6 py-4 rounded-lg"
         style="background-color: rgba(255, 255, 255, 0.9);">
      <h2 class="font-sans text-3xl font-bold leading-none tracking-tight text-green-900 sm:text-4xl">
       {{ $t('Introduce') }}
      </h2>
    </div>
    
  </div>
 </template>

 <script>
export default {
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>