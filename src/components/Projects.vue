<template>
  <div class="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
    <div class="max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
      <!-- Header Section -->
      <div class="text-center mb-12 lg:mb-16">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4 rounded-lg">
          {{ $t('title') }}
        </h1>
        <p class="text-lg sm:text-xl text-gray-600">
          {{ $t('subtitle') }}
        </p>
      </div>

      <!-- Search and Filter Section -->
      <div class="flex flex-col sm:flex-row items-center justify-between mb-10 space-y-4 sm:space-y-0 sm:space-x-4">
        <div class="relative w-full sm:w-2/3 lg:w-1/2">
          <input
            type="text"
            v-model="searchTerm"
            :placeholder="$t('searchPlaceholder')"
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
          />
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div class="relative w-full sm:w-1/3 lg:w-1/4">
          <select
            v-model="selectedCategory"
            class="block w-full pl-4 pr-10 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm appearance-none bg-white transition-all duration-200"
          >
            <option value="">{{ $t('filterAll') }}</option>
            <option v-for="categoryKey in uniqueCategoryKeys" :key="categoryKey" :value="categoryKey">
              {{ $t(`projects.categories.${categoryKey}`) }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <img
            :src="project.imageUrl"
            :alt="$t(`projects.titles.${project.titleKey}`)"
            class="w-full h-48 object-cover rounded-t-2xl"
            onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/000?text=Image+Error';"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ $t(`projects.titles.${project.titleKey}`) }}
            </h3>
            <p class="text-blue-600 text-sm font-medium">
              {{ $t(`projects.categories.${project.categoryKey}`) }}
            </p>
          </div>
        </div>

        <!-- No results message -->
        <div v-if="filteredProjects.length === 0" class="col-span-full text-center py-10 text-gray-500 text-lg">
          {{ $t('projects.noResults') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import googleHealthImage from '../assets/images/web-project-2.jpg';
import phoenixAgencyImage from '../assets/images/mobile-project-2.jpg';
import projectManagementImage from '../assets/images/ui-project-1.jpg';
import cloudStorageImage from '../assets/images/ui-project-2.jpg';
import reactSocialImage from '../assets/images/mobile-project-1.jpg';
import appleDesignImage from '../assets/images/web-project-1.jpg';

const { t } = useI18n();

// Reactive state for projects data with translation keys
const projects = ref([
  {
    id: 1,
    titleKey: 'google_health_platform',
    categoryKey: 'web_application',
    imageUrl: googleHealthImage,
  },
  {
    id: 2,
    titleKey: 'phoenix_digital_agency',
    categoryKey: 'mobile_application',
    imageUrl: phoenixAgencyImage,
  },
  {
    id: 3,
    titleKey: 'project_management_ui',
    categoryKey: 'ui_ux_design',
    imageUrl: projectManagementImage,
  },
  {
    id: 4,
    titleKey: 'secure_cloud_storage',
    categoryKey: 'ui_ux_design',
    imageUrl: cloudStorageImage,
  },
  {
    id: 5,
    titleKey: 'react_social_app',
    categoryKey: 'mobile_application',
    imageUrl: reactSocialImage,
  },
  {
    id: 6,
    titleKey: 'apple_design_system',
    categoryKey: 'web_application',
    imageUrl: appleDesignImage,
  },
]);

// Reactive state for search term and selected category
const searchTerm = ref('');
const selectedCategory = ref('');

// Computed property to get unique category keys
const uniqueCategoryKeys = computed(() => {
  const categories = new Set();
  projects.value.forEach(project => {
    categories.add(project.categoryKey);
  });
  return [...categories].sort();
});

// Computed property to filter projects
const filteredProjects = computed(() => {
  let filtered = projects.value;

  // Filter by search term
  if (searchTerm.value) {
    const lowerCaseSearchTerm = searchTerm.value.toLowerCase();
    filtered = filtered.filter(project => {
      const translatedTitle = t(`projects.titles.${project.titleKey}`).toLowerCase();
      const translatedCategory = t(`projects.categories.${project.categoryKey}`).toLowerCase();
      return (
        translatedTitle.includes(lowerCaseSearchTerm) ||
        translatedCategory.includes(lowerCaseSearchTerm)
      );
    });
  }

  // Filter by selected category
  if (selectedCategory.value) {
    filtered = filtered.filter(project => 
      project.categoryKey === selectedCategory.value
    );
  }

  return filtered;
});
</script>
<script>
export default {
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>