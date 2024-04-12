<script lang="ts">
import {defineComponent, ref, onMounted, onBeforeUnmount} from 'vue'
import {createApi} from 'unsplash-js'
import axios from 'axios'

const splash = createApi({
    accessKey: "Lp2ZxOCvwshDvak2U6pKTVj9RFEMDJcItJjU2xQYzLc"
  })
export default defineComponent({
	name: 'BigHeader',
	setup() {
		const window_width = window.innerWidth
		const bg_images = ref([])
		const showing_image = ref(0)
		const last_image = ref(0)
		let change_img_interval: any

		const getImage = async () => {
			const img_data:any = await splash.collections.getPhotos({collectionId: 'Qmz09dv5aLw'}).then(res => {
				console.log(res)
				return res.response
			})
			console.log(img_data)
			bg_images.value = img_data.results.map((r:any) => {
				return r.urls.regular as string
			})
			last_image.value = bg_images.value.length - 1
		}

		const changeImage = () => {
			if (showing_image.value  === last_image.value) {
				showing_image.value = 0
			} else {
				showing_image.value = showing_image.value + 1
			}
		}

		onMounted(async () => {
			await getImage()
			change_img_interval = setInterval(function () {
				changeImage()
			}, 10000)
		})

		// onBeforeUnmount(() => {
		// 	stopInterval(change_img_interval)
		// })
		return {
			window_width,
			bg_images,
			showing_image
		}
	}
})
</script>

<template>
	<div class="big-header-container">
		<div class="bg-image">
			<div class="fade-blk"></div>
			<img class="bg-image-img" :src="bg_images[showing_image]" alt="current background image" />
		</div>
		<div class="intro">
			<div class="left-top">
				<div class="profile-image-container">
					<div class="circle-pulse"></div>
					<div class="circle-pulse-2"></div>
					<img class="profile-image" src="../assets/images/about-2.png" alt="about me picture of jesus diaz-barriga" />
				</div>
				
			</div>
			<div class="right-bottom">
				<h1>Jesus Agustin<br />Diaz-Barriga</h1>
				<br />
				<div class="description">SOFTWARE ENGINEER</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.big-header-container {
		width: 100%;
		height: 100vh;
		background: #ffd;
		position: relative;
		.bg-image {
			width: 100%;
			height: 100vh;
			overflow: hidden;
			position: relative;
			.bg-image-img {
				width: 140%;
				position: absolute;
				left: -20%;
				top: 0;
				animation: moving-bg 30s linear infinite;
				z-index: 1;
			}
			.fade-blk {
				position: absolute;
				height: 100%;
				width: 100%;
				background-color: #000;
				z-index: 2;
				animation: fade 10s linear infinite;
			}
		}
		.intro {
			z-index: 3;
			position: absolute;
			top: 0;
			left: 0;
			display: flex;
			width: 100%;
			height: 100vh;
			background-color: rgba(34, 39, 40, 0.85);
			align-items: center;
			align-content: space-around;
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
					.profile-image {
						top: 0;
						left: 0;
						width: 100%;
						position: absolute;
						z-index: 5;
						background-color: #fff;
						border-radius: 50%;
					}
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
						position: absolute;
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
				.description {
					font-size: 1.25rem;
				}
			}
		}

	}

	@keyframes moving-bg {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-10%);
		}
		75% {
			transform: translateX(10%);
		}
		100% {
			transform: translateX(0);
		}
	}
	@keyframes fade {
		0% {
			opacity: 1;
		}
		10% {
			opacity: 0;
		}
		90% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes pulse {
		0% {
			transform: scale(1, 1);
			opacity: 1;
		}
		100% {
			transform: scale(1.5, 1.5);
			opacity: 0;
		}
	}
	@keyframes pulse-2 {
		0% {
			transform: scale(1, 1);
			opacity: 1;
		}
		100% {
			transform: scale(2, 2);
			opacity: 0;
		}
	}
	@media (max-width: 500px) {
		.big-header-container {
			.bg-image {
				height: 100vh;
				width: auto;
				.bg-image-img {
					height: 100vh;
					left: -50%;
					width: auto;
				}
			}
			.intro {
				z-index: 3;
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				width: 100%;
				height: 100vh;
				background-color: rgba(34, 39, 40, 0.85);
				align-items: center;
				align-content: space-around;
				flex-wrap: wrap;
				padding: 10px;
				text-align: center;
				.left-top {
					width: 100%;
					position: relative;
					.profile-image-container {
						width: 310px;
						height: 310px;
						.circle-pulse {
							width: 300px;
							height: 300px;
							display: none;
						}
						.circle-pulse-2 {
							width: 300px;
							height: 300px;
							display: none;
						}
					}
					
				}
				.right-bottom {
					width: 100%;
					h1 {
						font-size: 4rem;
						font-weight: bolder;
						line-height: 80%;
					}
					.description {
						font-size: 1.25rem;
					}
				}
			}
		}
		
	}
</style>