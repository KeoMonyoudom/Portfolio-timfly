<template>
    <nav class="bg-indigo-600 sticky top-0 z-50 px-4 py-4 flex justify-between items-center">
        <RouterLink to="/" class="flex items-center text-xl text-white font-bold leading-none">
            <img class="w-6 h-6" src="https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png"/>
            <h2 class="ms-2">Time Fly</h2>
        </RouterLink>
        <div class="lg:hidden">
            <button class="navbar-burger flex items-center text-white p-3">
                <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
                <RouterLink to="/" class="text-sm text-gray-100 hover:font-bold">{{ $t('home') }}</RouterLink>
            </li>
            <li class="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </li>
            <li>
                <RouterLink to="/about" class="text-sm text-gray-100 hover:font-bold">{{ $t('about') }}</RouterLink>
            </li>
            <li class="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </li>
            <li>
                <RouterLink to="/services" class="text-sm text-gray-100 hover:font-bold">{{ $t('services') }}</RouterLink>
            </li>
            <li class="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </li>
            <li>
                <RouterLink to="/projects" class="text-sm text-gray-100 hover:font-bold">{{ $t('project1') }}</RouterLink>
            </li>
            <li class="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </li>
            <li>
                <RouterLink to="/contact" class="text-sm text-gray-100 hover:font-bold">{{ $t('contact') }}</RouterLink>
            </li>
        </ul>
        <div class="hidden lg:flex lg:ml-auto items-center space-x-3">
            <div v-if="$i18n.locale === 'en'" @click="changeLanguage('khm')"
                class="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-md transition duration-200">
                ខ្មែរ
            </div>
            <div v-else @click="changeLanguage('en')"
                class="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-md transition duration-200">
                English
            </div>
        </div>
    </nav>
    <div class="navbar-menu relative z-50 hidden">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
                <RouterLink to="/" class="flex items-center mr-auto text-2xl font-bold leading-none">
                    <img class="w-8 h-8" src="https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png"/>
                    <h2 class="ms-2">Time Fly</h2>
                </RouterLink>
                <button class="navbar-close">
                    <svg class="h-6 w-6 text-gray-900 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div>
                <ul>
                    <li class="mb-1 ">
                        <RouterLink to="/" class="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-sm">{{ $t('home') }}</RouterLink>
                    </li>
                    <li class="mb-1">
                        <RouterLink to="/about" class="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-sm">{{ $t('about') }}</RouterLink>
                    </li>
                    <li class="mb-1">
                        <RouterLink to="/services" class="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-sm">{{ $t('services') }}</RouterLink>
                    </li>
                    <li class="mb-1">
                        <RouterLink to="/projects" class="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-sm">{{ $t('projects') }}</RouterLink>
                    </li>
                    <li class="mb-1">
                        <RouterLink to="/contact" class="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-sm">{{ $t('contact') }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <p class="my-4 text-xs text-center text-gray-100">
                    <span>{{ $t('copyright') }} © 2024</span>
                </p>
            </div>
        </nav>
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