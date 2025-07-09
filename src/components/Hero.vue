<template>
  <div class="bg-[url('@/assets/images/profile.png')] bg-cover bg-center min-h-200 flex flex-col items-center justify-center relative">

    <!-- View Source Code - top right -->
    <div class="fixed top-24 right-4 z-50">
      <a
        href="https://github.com/KeoMonyoudom/Portfolio-timfly"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="py-4 px-4 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-md shadow-md transition duration-200">
          View Source Code
        </div>
      </a>
    </div>

    <!-- Hero Content -->
    <div
      class="text-center z-10 px-6 py-8 rounded-lg"
      style="background-color: rgba(255, 255, 255, 0.9);"
    >
      <h2 class="font-sans text-3xl font-bold leading-none tracking-tight text-green-900 sm:text-4xl">
        {{ $t('Introduce') }}
      </h2>

      <!-- Download CV Button -->
      <a
        href="./files/timefly.pdf"
        download
        class="mt-6 inline-flex items-center px-4 py-2 border border-indigo-300 text-indigo-600 font-medium rounded-md shadow-sm hover:bg-indigo-50 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Download CV
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
