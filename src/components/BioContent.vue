<script lang="ts">
import {defineComponent, ref} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
export default defineComponent({
	name: 'BioContent',
	components: {FontAwesomeIcon},
	setup() {}
})
</script>

<template>
<div class="bio">
  <p style="font-size: 2rem;"><b>Software Engineer in Denver, CO</b></p><br />
  <p>Seeking a challenging role as a Software Engineer, leveraging expertise as a Full-stack Developer. Eager to apply extensive experience in NodeJS, JavaScript, Python, Django, Typescript,  React, Vue.js, generative AI and other technologies to support critical national missions.</p>
  <p class="languages">
  	<font-awesome-icon class="fa-icon-c" icon="fa-brands fa-node" />
  	<font-awesome-icon class="fa-icon-c" icon="fa-brands fa-square-js" /> 
  	<font-awesome-icon class="fa-icon-c" icon="fa-brands fa-python" /> 
  	<font-awesome-icon class="fa-icon-c" icon="fa-brands fa-vuejs" /> 
  	<font-awesome-icon class="fa-icon-c" icon="fa-brands fa-react" /> 
  	<font-awesome-icon class="fa-icon-c" icon="fa-brands fa-html5" /> 
  </p>
</div>
</template>

<style lang="scss" scoped>
.bio {
  width: 75%;
  color: #fff;
  font-size: 1.5rem;
  .languages {
  	font-size: 3rem;
  	.fa-icon-c {
  		margin: 3px 10px;
  	}
  }
}
@media (max-width: 500px) {
	.bio {
		width: 100%;
		height: auto;
		overflow: scroll;

	}
}
</style>