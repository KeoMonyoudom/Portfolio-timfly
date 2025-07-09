<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Services from '../components/Services.vue'
import Footer from '../components/Footer.vue'
import ApiDataFetcher from '../components/ApiDataFetcher.vue'
import Projects from '../components/Projects.vue'


</script>

<template>
  <main>
    <Hero />
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
    <!-- <ApiDataFetcher/>   -->
                    
   <Footer />
  </main>
  
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