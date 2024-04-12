<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
	name: 'ProjectSection',
	setup() {

	}
})
</script>

<template>
	<div class="project-container">
		<div class="project">
			<div class="project-title">Flo &amp; Roll</div>
			<div class="project-description">
				<ul>
					<li>A community driven forum. Post and comment for discussion. Can post images, links, or discussions.</li>
					<li>Academy finder: Search jiu-jitsu academies in a map using Google maps API. Owners can create their page in order for them to display their information.</li>
					<li>Stack: ReachJS, NodeJS, ExpressJS, MongoDB, AWS Amplify, AWS EC2 AWS ECR</li>
				</ul>
			</div>
			<div class="project-redirect"><a class="project-link" href="https://floandroll.com" target="_blank">View Project</a></div>
		</div>
	</div>
</template>

<style lang="scss">
	.project-container {
		width: 50%;
		margin: 0 auto;
		.project {
			width: 100%;
			.project-title {
				text-align: center;
				font-size: 2rem;
			}
			.project-redirect {
				width: 100%;
				text-align: center;
				margin: 30px 0;
				.project-link {
					background: #91C499;
					padding: 10px 20px;
					border-radius: 20px;
					color: #22162B;
					text-decoration: none;
					&:hover, &:visited, &:active {
						color: #22162B;
						text-decoration: none;
					}

				}
			}
		}
	}
</style>