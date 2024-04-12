<script lang="ts">
import {defineComponent, ref} from 'vue'

interface expStruct {
	name: string,
	role: string,
	duration: string,
	activities: [string]
}
export default defineComponent({
	name: 'ExperienceSection',
	setup() {
		const experience: expStruct[] = ref([
			{
				name: 'WageUp Inc.',
				role: 'Sr. Full-stack Developer',
				duration: '12/2019 - Present',
				activities: [
					'Utilized Vue.js and React frameworks to develop user-friendly web interfaces for clients, facilitating data visualization.',
					'Developed RESTful APIs using Python and Django framework to support business operations.',
					'Contributed to application and architecture development, including testing and debugging.',
					'Built infrastructure and applications enabling distribution of over $2,000,000 in rewards to 10,000 frontline workers.',
					'Integrated generative AI and Machine Learning features into applications, aiding clients in scheduling and decision-making processes.',
					'Created demo applications and performance-based campaigns to showcase product capabilities and incentivize employees.',
					'Planned and implemented gamification strategies for client engagement.'
					]
			},
			{
				name: 'Pechanga',
				role: 'Web Developer',
				duration: '3/2018 - 12/2019',
				activities: [
					'Designed and developed internal applications and provided support for marketing inquiries related to the website.',
					'Updated company website regularly and created web pages for events, promotions, and special announcements.'
				]
			},
			{
				name: 'Vestas',
				role: 'Junior Back-end Developer',
				duration: '5/2014 - 1/2017',
				activities: [
					'Developed new functionalities for internal applications using Python and Django.',
					'Created web pages and displayed database-driven data using HTML, CSS, and JavaScript.'
				]
			}
		])

		return {
			experience
		}
		
	}
})
</script>

<template>
<div class="experience-container">
	<div class="experience" v-for="e in experience" :key="e.name">
		<div class="company-name">{{ e.name }}</div>
		<div class="role">{{ e.role }}</div>
		<div class="duration">{{ e.duration }}</div>
		<div class="activities">
			<ul>
				<li v-for="a in e.activities">{{ a }}</li>
			</ul>
		</div>
	</div>
</div>
</template>

<style lang="scss" scoped>
.experience-container {
	width: 90vw;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	overflow-x: auto;
	position: relative;
	justify-content: center;
	.experience {
		position: relative;
		padding: 20px;
		min-width: 400px;
		width: 100%;
		border-right: solid thin darken(#E0E2DB, 30%);
		.company-name {
			font-size: 2rem;
			text-align: center;
			font-weight: 800;
		}
		.role {
			font-size: 1.5rem;
			text-align: center;
			font-weight: 500;
		}
	}
}
</style>