<template>
	<div id="app" class="teams-landing container">
		<div class="row">
			<div class="small-12 large-8 columns">
				<teams-overview />
				<teams-listing />
			</div>
			<div class="columns small-12 large-4">
				<teams-leaderboards />
			</div>
		</div>
	</div>
</template>

<script>
	import TeamsOverview from './components/TeamsOverview.vue';
	import TeamsListing from './components/TeamsListing.vue';
	import TeamsLeaderboards from './components/TeamsLeaderboards.vue';

	export default {
		components: {
			TeamsOverview,
			TeamsListing,
			TeamsLeaderboards
		}
	}
</script>

<style lang="scss">
	body {
	  color: #333;
	  font-family: PostGrotesk, Arial, Helvetica, sans-serif;
	  font-size: 14px;
	  line-height: 18px;
	}

	.container {
	  max-width: 990px;
	  margin: 0 auto;
	}

	ul {
	  padding: 0;
	  margin: 0;
	}

	li {
	  list-style-type: none;
	}
</style>
