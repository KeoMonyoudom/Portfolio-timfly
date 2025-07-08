<template>
  <div class="container mx-auto p-4 font-sans">
    <h1 class="text-3xl font-bold text-indigo-700 mb-6 text-center rounded-md p-2 shadow-md bg-indigo-100">
      {{ $t('petGalleryTitle') }}
    </h1>

    <!-- Loading State -->
    <div v-if="status === 'loading'" class="flex justify-center items-center h-48">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
      <p class="ml-4 text-lg text-gray-600">{{ $t('loadingPets') }}</p>
    </div>

    <!-- Error State -->
    <div v-else-if="status === 'error'" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative shadow-md" role="alert">
      <strong class="font-bold">{{ $t('errorOccurred') }}</strong>
      <span class="block sm:inline"> {{ error?.message || $t('unknownError') }}</span>
      <button 
        @click="fetchPets"
        class="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
      >
        {{ $t('retryButton') }}
      </button>
    </div>

    <!-- Data Display -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(pet, index) in pets" 
        :key="index" 
        class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden"
      >
        <img 
          :src="pet.url" 
          :alt="$t('petImageAlt')" 
          class="w-full h-48 object-cover"
          @error="handleImageError(pet)"
        />
        <div class="p-4">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">{{ $t('petBreed') }}: {{ pet.breed || $t('unknownBreed') }}</h2>
          <button 
            @click="fetchMoreImages(pet.breed)"
            class="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
          >
            {{ $t('moreImagesButton') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Reactive state
const pets = ref([]);
const status = ref('loading');
const error = ref(null);

// API configuration for Dog API
const API_CONFIG = {
  baseUrl: 'https://dog.ceo/api',
  endpoints: {
    breeds: '/breeds/list/all',
    randomImages: '/breeds/image/random/10',
    breedImages: '/breed/{breed}/images/random/3'
  }
};

/**
 * Extracts breed name from image URL
 */
const extractBreed = (url) => {
  const matches = url.match(/breeds\/([^/]+)/);
  return matches ? matches[1].split('-').reverse().join(' ') : null;
};

/**
 * Fetches random pet images
 */
const fetchPets = async () => {
  status.value = 'loading';
  error.value = null;

  try {
    const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.randomImages}`);
    
    if (!response.ok) {
      throw new Error(t('apiError', {
        status: response.status,
        statusText: response.statusText
      }));
    }

    const data = await response.json();
    pets.value = data.message.map(url => ({
      url,
      breed: extractBreed(url)
    }));
    status.value = 'success';
  } catch (err) {
    console.error('API request failed:', err);
    error.value = err;
    status.value = 'error';
    
    // Fallback data for demo purposes
    if (import.meta.env.MODE === 'development') {
      pets.value = getFallbackData();
      status.value = 'success';
    }
  }
};

/**
 * Fetches more images of a specific breed
 */
const fetchMoreImages = async (breed) => {
  try {
    const formattedBreed = breed.split(' ').reverse().join('/');
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.breedImages.replace('{breed}', formattedBreed)}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    const newPets = data.message.map(url => ({ url, breed }));
    pets.value = [...pets.value, ...newPets];
  } catch (err) {
    console.error('Failed to fetch breed images:', err);
  }
};

/**
 * Handles image loading errors
 */
const handleImageError = (pet) => {
  pet.url = 'https://placehold.co/600x400/cccccc/000?text=Image+Not+Found';
};

/**
 * Provides fallback data when API fails
 */
const getFallbackData = () => {
  return Array.from({ length: 3 }, (_, i) => ({
    url: `https://placehold.co/600x400/cccccc/000?text=Pet+${i+1}`,
    breed: t('fallbackPetBreed', { number: i + 1 })
  }));
};

// Initial fetch
onMounted(fetchPets);
</script>

<style>
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>