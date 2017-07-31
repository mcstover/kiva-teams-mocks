<template>
	<li class="team-score row collapse">
		<div class="small-3 columns">
			<a class="thumb" :href="team.url"><img :src="team.img_url"></a>
		</div>
		<div class="small-9 columns">
			<a class="team-name" :href="team.url">{{team.name}}</a>
			<div class="fundraising-meter progress">
				<span class="meter" :style="meter_style"><small class="small-text">{{team.lent_amount}}</small></span>
			</div>
		</div>
	</li>
</template>

<script>
	export default {
		props: {
			team: {
				type: Object,
				required: true
			}
		},
		computed: {
			meter_style: function () {
				return {
					width: this.team.progress_percent + '%'
				}
			}
		}
	}
</script>

<style lang="scss">
	.team-score {
		padding: .5rem 0;
		margin: .25rem 0;
		border-top: 1px solid #CCC;

		a.thumb {
			display: block;
			margin: 0 .5rem 0 0;
		}

		.team-name {
			display: block;
		}
		.fundraising-meter {
			margin: 0;
		}
	}

	@media only screen and (min-width: 681px) {
		.team-score {
			.team-name {
				font-size: .8rem;
			}
			.fundraising-meter {
				height: 1rem;
				margin: 0;
			}
			.meter {
				height: 1rem;
				line-height: 1rem;

				.small-text {
					padding: 0 0 0 .3rem;
					line-height: 1rem;
					vertical-align: top;
				}
			}
		}
	}
</style>
