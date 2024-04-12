<script lang="ts">
import {defineComponent, ref, onMounted, computed} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

export default defineComponent({
	name: 'NavTabs',
	components: {FontAwesomeIcon},
	setup() {
		const sections = ref([
			{title: 'Home', section: '#home'},
			{title: 'About', section: '#about'},
			{title: 'Experience', section: '#experience'},
			{title: 'Projects', section: '#projects'},
			{title: 'Contact Me', section: '#contact'}
		
		])
		const selected = ref('Home')
		const window_width = window.innerWidth
		const show_nav = ref(false)

		const move_to = (title: string) => {
			selected.value = title
			// location.href = sec
		}
		onMounted(() => {
			show_nav.value = window_width > 500
		})
		return {
			sections,
			selected,
			window_width,
			move_to,
			show_nav
		}
	}
})
</script>

<template>
	<div class="nav-container">
		<div v-if="show_nav" class="nav-container">
			<a :href="s.section" v-smooth-scroll class="nav" v-for="s in sections" :key="s.title" @click="move_to(s.title)">
				{{ s.title }}
			</a>
		</div>
		<button v-if="window_width < 500" class="menu-btn" @click="show_nav = !show_nav"><font-awesome-icon icon="fa-solid fa-bars" /></button>
	</div>
</template>

<style lang="scss" scoped>
.nav-container {
	position: fixed;
	bottom: 10px;
	right: 30px;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	.nav, .menu-btn {
		padding: 5px 20px;
		border: solid thin #fff;
		border-radius: 20px;
		margin: 10px 0;
		font-size: 16px;
		background-color: #22162B;
		color: #fff;
		text-decoration: none;
		text-align: center;
		&:hover, &:visited, &:active {
			color: #fff;
			text-decoration: none;
		}
		&.active {
			background-color: #fff;
			color: #22162B;
			text-decoration: none;
			&:hover, &:visited, &:active {
				color: #22162B;
				text-decoration: none;
			}
			
		}
	}
	.menu-btn {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		align-self: flex-end;
		padding: 0;

	}
}
</style>