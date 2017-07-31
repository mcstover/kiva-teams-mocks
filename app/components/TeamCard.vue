<template>
	<article class="row">
		<div class="team-image small-5 small-centered medium-3 medium-uncentered columns">
			<a :href="team.url"><img :src="team.img_url" :alt="team.name" :title="team.name" width="135" height="135"></a>
		</div>
		<div class="team-desc medium-9 columns">
			<h2><a :href="team.url" :title="team.name">{{team.name}}</a></h2>
			<div class="description">
				<div class="stats small-text">
					<span class="memberCount">{{team.member_count}}</span> members have lent <span class="lentAmount">{{team.lent_amount}}</span> in <span class="loanCount">{{team.loan_count}}</span> loans
				</div>
				<div class="info small-text">
					<span class="location">{{team.location}}</span>
					<span class="category">Category: {{team.category}}</span>
					<span class="createdDate">Team since: {{team.create_time}}</span>
				</div>
				<div class="loanBecause">We loan because: {{team.loan_because}}</div>
			</div>
			<div class="join">
				<a class="button setting" :href="join_url" title="Join team">Join Team</a>
			</div>
		</div>
	</article>
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
			join_url: function () {
				return 'https://www.kiva.org/teams/join/process?team_id=' + this.team.id
			}
		}
	}
</script>

<style lang="scss">
	.teams-listing article {
		padding: 1rem 0;
		border-top: 1px solid #CCC;
	}

	.team-image a {
		display: block;
		margin: 0 auto;
		text-align: center;
	}

	.team-desc {
		.description {
			.stats, .info {
				font-size: .7rem;
				color: #444;

				.category, .createdDate {
					border-left: #666 1px solid;
					margin-left: 5px;
					padding-left: 8px;
				}
			}
			.loanBecause {
				margin: .8rem 0;
			}
		}
	}

	@media only screen and (min-width: 681px) {
		.team-image a {
			display: block;
			margin: 0;
			text-align: left;
		}
	}
</style>
