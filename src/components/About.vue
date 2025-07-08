<template>
  <div>
    <p class="text-center max-w-2xl mx-auto text-lg leading-relaxed font-normal text-gray-700">
            {{ $t('introDetail') }}
    </p>
  </div>
  <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-xl aspect-video bg-black">
    <video
      ref="videoPlayer"
      src="../assets/videos/intro.mp4"
      
      class="absolute inset-0 w-full h-full object-cover"
      playsinline
      preload="metadata"
      @play="isPlaying = true"
      @pause="isPlaying = false"
      @ended="isPlaying = false"
    ></video>

    <transition name="fade">
      <div
        v-if="!isPlaying"
        class="absolute inset-0 flex items-center justify-center cursor-pointer"
        @click="toggleVideoPlayback"
      >
        <div
          class="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl hover:scale-110"
        >
          <svg class="w-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
            ></path>
          </svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const videoPlayer = ref(null);
const isPlaying = ref(false);

const toggleVideoPlayback = () => {
  if (videoPlayer.value) {
    if (isPlaying.value) {
      videoPlayer.value.pause();
    } else {
      videoPlayer.value.play();
    }
  }
};
</script>

<style scoped>
/* Optional: Basic fade transition for the play button */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Add more specific video player styling if needed */
</style>