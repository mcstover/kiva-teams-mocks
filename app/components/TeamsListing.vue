<template>
	<div class="teams-listing">
		<ul>
			<li v-for="team in teams">
				<team-card :team="team"/>
			</li>
		</ul>
	</div>
</template>

<script>
	import TeamCard from './TeamCard.vue';

	export default {
		components: { TeamCard },
		data () {
			const team = {
				id: 394,
				name: 'Nerdfighters',
				url: 'https://www.kiva.org/team/nerdfighters',
				img_url: 'https://www-kiva-org-1.global.ssl.fastly.net/img/s135/1364412.jpg',
				member_count: '51,046',
				lent_amount: '$8,453,675',
				loan_count: '289,126',
				location: 'Nerdfighteria',
				category: 'Common Interest',
				create_time: 'Sep, 2008',
				loan_because: 'We aim to decrease world suck.'
			};

			return {
				teams: [team, team, team]
			}
		}
	}
</script>

<style lang="scss">
	.teams-listing {
		display: block;
		padding: 1.8rem 0;
		overflow: hidden;
	}
</style>
