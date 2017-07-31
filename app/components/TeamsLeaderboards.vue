<template>
	<div class="teams-leaderboards">
		<h4>Team Leaderboards</h4>
		<p>Amount Loaned</p>
		<ul>
			<team-score
				v-for="(team, index) in teams"
				:team="team"
				:key="index"
			/>
		</ul>
	</div>
</template>

<script>
	import TeamScore from './TeamScore.vue';

	export default {
		components: { TeamScore },
		data () {
			return {
				teams: [
					{
						name: 'InsideFlyer',
						url: 'https://www.kiva.org/team/insideflyer',
						img_url: 'https://www-kiva-org-2.global.ssl.fastly.net/img/s135/5c668087e977d0342013ed7d42018ba9.jpg',
						lent_amount: '$58,400',
						progress_percent: 59
					},
					{
						name: 'InsideFlyer',
						url: 'https://www.kiva.org/team/insideflyer',
						img_url: 'https://www-kiva-org-2.global.ssl.fastly.net/img/s135/5c668087e977d0342013ed7d42018ba9.jpg',
						lent_amount: '$8,400',
						progress_percent: 33
					},
					{
						name: 'InsideFlyer',
						url: 'https://www.kiva.org/team/insideflyer',
						img_url: 'https://www-kiva-org-2.global.ssl.fastly.net/img/s135/5c668087e977d0342013ed7d42018ba9.jpg',
						lent_amount: '$188,400',
						progress_percent: 93
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.teams-leaderboards {
		margin: 1.32rem 0 2rem;
		border-bottom: 1px solid #CCC;
	}
</style>
