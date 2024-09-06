<template>
	<div
		class="sidebar"
		:data-color="sidebarItemColor"
		:data-image="sidebarBackgroundImage"
		:style="sidebarStyle"
	>
		<div class="logo">
			<a class="simple-text logo-mini">
				<div class="logo-img">
					<img :src="imgLogo" alt="" />
				</div>
			</a>
			<a
				@click="toggleSidebar"
				target="_blank"
				class="simple-text logo-normal"
				style="text-transform: none"
			>
				{{ title }} <small>({{ $unitid }})</small>
			</a>
		</div>
		<div class="sidebar-wrapper">
			<slot name="content"></slot>
			<md-list class="nav">
				<div class="carousel">
          <div v-if="loading" class="loading-mask">
            <div class="mask"></div>
          </div>
					<!-- Carousel Wrapper for Images-->
					<div class="carousel-images">
						<img
              @load="imageLoaded" 
							:src="currentImageUrl"
							:alt="currentImageUrl"
							class="carousel-image"
						/>
					</div>

					<!-- Glossy Navigation Buttons -->
					<button class="glossy-btn carousel-prev" @click="prevImage">
						‹
					</button>
					<button class="glossy-btn carousel-next" @click="nextImage">
						›
					</button>

					<!-- Dots Navigation for each image -->
					<div class="carousel-dots">
						<span
							v-for="(image, index) in getCameraCount"
							:key="index"
							class="dot"
							:class="{ active: index === currentImageIndex }"
							@click="goToImage(index)"
						></span>
					</div>
				</div>

				<!-- <img :src="img" width="100%" /> -->
				<table>
					<tr>
						<td align="center">
							<md-button
								class="md-warning md-sm md-just-icon jdok"
								@click="btn_up"
							>
								<md-icon>keyboard_double_arrow_up</md-icon>
							</md-button>
						</td>
						<td align="center">
							<md-button
								class="md-warning md-sm md-just-icon jdok"
								@click="btn_left"
							>
								<md-icon>keyboard_double_arrow_left</md-icon>
							</md-button>
						</td>
						<td align="center">
							<md-button
								:disabled="
									!getStat.provisioning.allowed_to_change
								"
								:class="
									(getStat.provisioning.state
										? 'md-success'
										: 'md-warning') +
									' md-sm md-just-icon1 jdok'
								"
								@click="place_holder"
							>
								provisioning
							</md-button>
						</td>
						<td align="center">
							<md-button
								class="md-warning md-sm md-just-icon jdok"
								@click="btn_right"
							>
								<md-icon>keyboard_double_arrow_right</md-icon>
							</md-button>
						</td>
						<td align="center">
							<md-button
								class="md-warning md-sm md-just-icon jdok"
								@click="btn_down"
							>
								<md-icon>keyboard_double_arrow_down</md-icon>
							</md-button>
						</td>
					</tr>
				</table>
				<div class="logo" />
			</md-list>

			<md-list>
				<sidebar-link to="/stats">
					<md-icon>assessment</md-icon>
					<p class="jmen">Stats</p>
				</sidebar-link>
				<sidebar-link to="/configuration">
					<md-icon>settings</md-icon>
					<p class="jmen">Configuration</p>
				</sidebar-link>

				<sidebar-link to="/notifications">
					<md-icon>notifications</md-icon>
					<div class="jmen">
						<table>
							<tr>
								<td>Notifications</td>
								<td>
									<md-badge :md-content="getStat.alarms" />
								</td>
							</tr>
						</table>
					</div>
				</sidebar-link>

				<sidebar-link to="/tools">
					<md-icon>build_circle</md-icon>
					<p class="jmen">Tools</p>
				</sidebar-link>
				<sidebar-link to="/live">
					<md-icon>tv</md-icon>
					<p class="jmen">Live</p>
				</sidebar-link>
			</md-list>
		</div>
	</div>
</template>
<script>
	import EventBus from "../../eventBus";
	import { mapActions, mapGetters, mapMutations } from "vuex";

	export default {
		props: {
			title: {
				type: String,
				default: "",
			},
			sidebarBackgroundImage: {
				type: String,
				default: require("@/assets/img/sidebar-2.jpg"),
			},
			imgLogo: {
				type: String,
				default: require("@/assets/img/helix-logo.png"),
			},
			sidebarItemColor: {
				type: String,
				default: "blue",
				validator: (value) => {
					let acceptedValues = [
						"",
						"purple",
						"blue",
						"green",
						"orange",
						"red",
					];
					return acceptedValues.indexOf(value) !== -1;
				},
			},
			sidebarLinks: {
				type: Array,
				default: () => [
					{
						name: "Live",
						path: "live",
					},
				],
			},
			autoClose: {
				type: Boolean,
				default: true,
			},
		},
		provide() {
			return {
				autoClose: this.autoClose,
			};
		},
		computed: {
			...mapGetters(["getStat", "getCameraCount"]),
			sidebarStyle() {
				return {
					backgroundImage: `url(${this.sidebarBackgroundImage})`,
				};
			},
			currentImageUrl() {
				if (this.currentImageIndex == 0) return "/jpeg/mjpeg_latest.jpg";
				return "/jpeg/mjpeg_latest_" + this.currentImageIndex + ".jpg";
			},
		},
		data() {
			return {
        loading: true,
				currentImageIndex: 0,
				img: this.$cam_image,
				intervaller: null,
			};
		},
		methods: {
			...mapActions([
				"getStatsFromServer",
				"sendChangeProvisioning",
				"sendRotate",
				"getCameraCountFromServer",
			]),
			place_holder() {
				this.sendChangeProvisioning();
				setTimeout(this.getStatsFromServer, 1000);
				setTimeout(this.setImage, 8000);
			},
			btn_up() {
				this.sendRotate("up");
			},
			btn_down() {
				this.sendRotate("down");
			},
			btn_left() {
				this.sendRotate("left");
			},
			btn_right() {
				this.sendRotate("right");
			},
			toggleSidebar() {
				EventBus.$emit("toggleSidebar");
			},
			setImage() {
				this.img = this.$cam_image + "?rnd=" + Math.random();
			},
			nextImage() {
				this.currentImageIndex =
					(this.currentImageIndex + 1) % this.getCameraCount;
			},
			prevImage() {
				this.currentImageIndex =
					(this.currentImageIndex - 1 + this.getCameraCount) %
					this.getCameraCount;
			},
			goToImage(index) {
				this.currentImageIndex = index;
			},
      loadImage() {
        // Reset loading state
        this.loading = true;
      },
      imageLoaded() {
        // Hide loading spinner once the image has loaded
        this.loading = false;
      }
		},
		created() {
			this.getStatsFromServer();
			this.getCameraCountFromServer();
			this.setImage();
			if (!this.intervaller)
				this.intervaller = setInterval(() => {
					this.setImage();
				}, 8000);
		},
		beforeDestroy() {
			if (this.intervaller) clearInterval(this.intervaller);
		},
	};
</script>
<style>
	@media screen and (min-width: 991px) {
		.nav-mobile-menu {
			display: none;
		}
	}
	.dokme {
		text-align: center;
	}
	.jdok {
		padding-left: 8px !important;
	}
	.jmen {
		color: white;
	}

	.carousel {
		position: relative;
		width: 100%;
		max-width: 800px;
		margin: auto;
	}

	.carousel-images {
		position: relative;
		overflow: hidden;
	}

	.carousel-image {
		width: 100%;
		height: auto;
		transition: transform 0.5s ease;
	}

	.glossy-btn {
		position: absolute;
		top: 0px;
		height: 100%;
		background-color: transparent; /* Transparent background */
		border: 0px solid rgba(255, 255, 255, 0.5); /* Transparent white border */
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		color: white;
		cursor: pointer;
		padding-top: 40px;
		padding-bottom: 40px;
		font-size: 30px;
		transition: background 0.3s ease, box-shadow 0.3s ease;
	}

	.glossy-btn:hover {
		background-color: rgba(255, 255, 255, 0.1); /* Slight white tint on hover */
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
	}

	.carousel-prev {
		left: 0px;
	}

	.carousel-next {
		right: 0px;
	}

	.carousel-dots {
		text-align: center;
		margin-top: 10px;
	}

	.dot {
		height: 15px;
		width: 15px;
		margin: 0 3px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		cursor: pointer;
	}

	.dot.active {
		background-color: #717171;
	}

  .loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
}

.mask {
  width: 50px;
  height: 50px;
  border: 6px solid rgba(0, 0, 0, 0.2);
  border-top-color: #3498db; /* Blue color for the rotating part */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Keyframes for rotating animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

