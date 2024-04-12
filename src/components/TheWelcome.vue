<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue'
import BigHeader from './BigHeader.vue'
import DisplaySection from './template/DisplaySection.vue'
import NavTabs from './template/NavTabs.vue'
import BioContent from './BioContent.vue'
import ExperienceSection from './ExperienceSection.vue'
import ProjectSection from './ProjectSection.vue'
import ContactMe from './ContactMe.vue'
export default defineComponent({
  name: 'TheWelcome',
  components: {BigHeader, DisplaySection, BioContent, NavTabs, ExperienceSection, ProjectSection, ContactMe},
  setup() {
    const section_viewport = ref([])

    onMounted(() => {
      let section_view = [
          document.querySelector('#home').getBoundingClientRect(),
          document.querySelector('#about').getBoundingClientRect(),
          document.querySelector('#experience').getBoundingClientRect(),
          document.querySelector('#projects').getBoundingClientRect(),
        ]
      console.log(section_view)
    })

  }
})
</script>

<template>
  <div style="width: 100%; height: 100vh">
    <nav-tabs />
    <big-header id="home" />
    <display-section title="About Me" id="about">
      <template v-slot:first-section>
        <div class="about-img">
          <img src="../assets/images/about.png" alt="about me picture of jesus diaz-barriga" />
        </div>
      </template>
      <template v-slot:second-section>
        <bio-content />
      </template>
    </display-section>
    <display-section title="Experience" id="experience" bgColor="#28667F" :single="true">
      <template v-slot:single-section>
        <experience-section />
      </template>
    </display-section>
    <display-section title="Projects" id="projects">
      <template v-slot:first-section><project-section /></template>
      <template v-slot:second-section>
        <div class="logo-img">
          <img src="../assets/images/Floandroll-large.png" alt="Flo and roll logo" class="flo-logo" />
        </div>
      </template>
    </display-section>
    <display-section title="Contact" id="contact" :single="true" bgColor="#3F7D20">
      <template v-slot:single-section>
        <contact-me />
      </template>
    </display-section>
  </div>
</template>

<style lang="scss">
.about-img {
  max-height: 700px;
  max-width: 700px;
  opacity: hidden;
  margin: 0 auto;
  img {
    width: 100%;
  }
}

.logo-img {
  max-height: 700px;
  width: 50%;
  margin: 20px auto;
  img {
    width: 50%;
  }
}

</style>
  