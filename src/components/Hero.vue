<template>
  <div class="bg-[url('@/assets/images/profile.png')] bg-cover bg-center w-center min-h-200 flex items-center justify-center">
      <div class="text-center z-10 px-6 py-4 rounded-lg"
         style="background-color: rgba(255, 255, 255, 0.9);">
      <h2 class="font-sans text-3xl font-bold leading-none tracking-tight text-green-900 sm:text-4xl">
       {{ $t('Introduce') }}
      </h2>
      
    </div>
   <br>
 <div class="fixed top-24 right-3 z-60">
  <a href="https://github.com/KeoMonyoudom/Portfolio-timfly" target="_blank" rel="noopener noreferrer">
    <div class="py-2 px-4 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-md shadow-md transition duration-200">
      View Source Code
    </div>
  </a>
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