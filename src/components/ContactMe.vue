<script lang="ts">
import {defineComponent, ref} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

export default defineComponent({
	name: 'ContactMe',
	components: {FontAwesomeIcon},
	setup() {}

})
</script>

<template>
<div class="contact-container">
	<p>Contact me if you want to hire me or send me a project.</p>
	<p><a class="outside-link" href="../assets/JesusAgustinDiaz-Barriga-Resume-4-2023.pdf" download> <font-awesome-icon style="margin-right: 7px" icon="fa-solid fa-download" />Download Resume</a></p>
	<p><font-awesome-icon icon="fa-solid fa-envelope" /> jagustin2791@gmail.com</p>
	<p>
		<a class="outside-link" href="https://www.linkedin.com/in/jesus-diaz-barriga-63ba6595/" target="_blank" >
			<font-awesome-icon class="fa-icon-c" icon="fa-brands fa-linkedin" />
		</a>
		<a class="outside-link" href="https://github.com/agustin2791" target="_blank">
			<font-awesome-icon class="fa-icon-c" icon="fa-brands fa-github" />
		</a>
	</p>
</div>
</template>

<style lang="scss" scoped>
	.contact-container {
		text-align: center;
		font-size: 2rem;
		color: #fff;
	}
	.fa-icon-c {
  		margin: 3px 10px;
  	}
  	.outside-link {
  		text-decoration: none;
  		color: #fff;
  		&:hover, &:visited, &:active {
			color: #fff;
			text-decoration: none;
		}
  	}
</style>