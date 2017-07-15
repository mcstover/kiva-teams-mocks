import Vue from 'vue'

const teamTemplate = `
    <li>
      <article class="row">
        <div class="team-image small-5 small-centered medium-3 medium-uncentered columns">
          <a class="" :href="team.url"><img :src="team.imageUrl" :alt="team.teamName" title="Nerdfighters" width="135" height="135"></a>
        </div>
        <div class="team-desc medium-9 columns">
          <h2 class=""><a :href="team.url" :title="team.teamName">{{ team.teamName }}</a></h2>
          <div class="description">
            <div class="stats small-text">
              <span class="memberCount">{{ team.memberCount }}</span> members have lent <span class="lentAmount">{{ team.totalRaised }}</span> in <span class="loanCount">{{ team.loanCount }}</span> loans
            </div>
            <div class="info small-text">
              <span class="location">{{ team.location }}</span>
              <span class="category">Category: {{ team.category }}</span>
              <span class="createdDate">Team since: {{ team.since }}</span>
            </div>
            <div class="loanBecause">We loan because: {{ team.because }}</div>
          </div>
          <div class="join">
            <a class="button setting" :href="team.joinUrl" title="Join team">Join Team</a>
          </div>
        </div>
      </article>
    </li>
  `;

Vue.component('team', {
  props: ['team'],
  template: teamTemplate
})
var mainTeamList = new Vue({
  el: '#teamListing',
  data: {
    teams: [
      {
        id: 0,
        teamName: 'Nerdfighters',
        url: 'https://www.kiva.org/team/nerdfighters',
        imageUrl: 'https://www-kiva-org-2.global.ssl.fastly.net/img/s135/1364412.jpg',
        memberCount: '51,046',
        totalRaised: '$8,453,675',
        loanCount: '289,126',
        location: 'Nerdfighteria',
        category: 'Common Interest',
        since: 'Sep, 2008',
        because: 'We aim to decrease world suck.',
        joinUrl: 'https://www.kiva.org/teams/join/process?team_id=394&amp;crumb=8c2f574d87'
      },
      {
        id: 1,
        teamName: 'InsideFlyer',
        url: 'https://www.kiva.org/team/insideflyer',
        imageUrl: 'https://www-kiva-org-2.global.ssl.fastly.net/img/s135/5c668087e977d0342013ed7d42018ba9.jpg',
        memberCount: '4,152',
        totalRaised: '$14,480,450',
        loanCount: '260,969',
        location: 'Worldwide',
        category: 'Common Interest',
        since: 'Feb, 2011',
        because: 'As travelers we have seen poverty first hand and are committed to making the world a better place for all..',
        joinUrl: 'https://www.kiva.org/teams/join/process?team_id=18077&crumb=b28633814d'
      },
      {
        id: 2,
        teamName: 'Team CANADA',
        url: 'https://www.kiva.org/team/team_canada',
        imageUrl: 'https://www-kiva-org-1.global.ssl.fastly.net/img/s135/54d590acc89b472919a715348daa5837.jpg',
        memberCount: '9,446',
        totalRaised: '$7,995,875',
        loanCount: '259,228',
        location: 'Canada',
        category: 'Local Area',
        since: 'Aug, 2008',
        because: 'So little means so much. And because we are so fortunate to be able to lend with the luxury of not worrying about whether we ever see that money again, while the clients borrow with the hope and determination that they…',
        joinUrl: 'https://www.kiva.org/teams/join/process?team_id=260&crumb=b28633814d'
      }
    ]
  }
})

/* Original HTML

<li>
  <article class="row">
    <div class="team-image small-5 small-centered medium-3 medium-uncentered columns">
      <a class="" href="https://www.kiva.org/team/nerdfighters"><img src="https://www-kiva-org-1.global.ssl.fastly.net/img/s135/1364412.jpg" alt="Nerdfighters" title="Nerdfighters" width="135" height="135"></a>
    </div>
    <div class="team-desc medium-9 columns">
      <h2 class=""><a href="https://www.kiva.org/team/nerdfighters" title="Nerdfighters">Nerdfighters</a></h2>
      <div class="description">
        <div class="stats small-text">
          <span class="memberCount">51,046</span> members have lent <span class="lentAmount">$8,453,675</span> in <span class="loanCount">289,126</span> loans
        </div>
        <div class="info small-text">
          <span class="location">Nerdfighteria</span>
          <span class="category">Category: Common Interest</span>
          <span class="createdDate">Team since: Sep, 2008</span>
        </div>
        <div class="loanBecause">We loan because: We aim to decrease world suck.</div>
      </div>
      <div class="join">
        <a class="button setting" href="https://www.kiva.org/teams/join/process?team_id=394&amp;crumb=8c2f574d87" title="Join team">Join Team</a>
      </div>
    </div>
  </article>
</li>

*/