<script lang="ts">
import {defineComponent, ref} from 'vue'

interface propType {

}
export default defineComponent({
	name: 'DisplaySection',
	props: {
		title: String,
		bgColor: {
			type: String,
			default: '#22162B'
		},
		single: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {

		return {}
	}
})
</script>

<template>
	<div class="section-container" :style="{'background-color': bgColor}">
		<div class="title-container">{{ title }}</div>
		<div class="single-section" v-if="single">
			<slot name="single-section"></slot>
		</div>
		<div class="left-top" v-if="!single">
			<slot name="first-section"></slot>
		</div>
		<div class="right-bottom" v-if="!single">
			<slot name="second-section"></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.section-container {
		width: 100%;
		height: 100vh;
		position: relative;
		display: flex;
		align-items: center;
		align-content: flex-start;
		flex-wrap: wrap;
		.title-container {
			width: 100%;
			text-align: center;
			font-size: 5rem;
			font-weight: bolder;
			color: #fff;
		}
		.single-section {
			width: 100%;
			height: 100vh;
			padding: 10px;
		}
		.left-top {
			width: 50%;
			position: relative;
			.profile-image-container {
				width: 500px;
				height: 500px;
				border: solid 5px #fff;
				border-radius: 50%;
				margin: 0 auto;
				position: relative;
				.circle-pulse {
					background: #fff;
					position: absolute;
					top: 0;
					left: 0;
					width: 500px;
					height: 500px;
					border-radius: 50%;
					border: solid thin #fff;
					animation: pulse 3s ease infinite;
				}
				.circle-pulse-2 {
					position: fixed;
					margin: 0 auto;
					width: 500px;
					height: 500px;
					border-radius: 50%;
					border: solid thin #fff;
					animation: pulse-2 3s ease infinite;
				}
			}
			
		}
		.right-bottom {
			width: 50%;
			h1 {
				font-size: 4rem;
				font-weight: bolder;
				line-height: 80%;
			}
		}
	}

	@media (max-width: 500px) {
		.section-container {
			width: 100%;
			min-height: 100vh;
			height: auto;
			padding: 10px;
			.single-section {
				height: auto;
			}
			.left-top {
				width: 100%;
				position: relative;				
			}
			.right-bottom {
				width: 100%;
				h1 {
					font-size: 4rem;
					font-weight: bolder;
					line-height: 80%;
				}
			}
			.bg-image {
				height: 100vh;
				width: auto;
				.bg-image-img {
					height: 100vh;
					left: -50%;
					width: auto;
				}
			}
		}
	}
</style>