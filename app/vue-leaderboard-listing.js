import Vue from 'vue'

const leaderTemplate = `<li class="team-score row collapse">
        <div class="columns small-3">
          <a class="thumb" :href="leader.url"><img :src="leader.imageUrl"></a>
        </div>
        <div class="columns small-9">
          <a class="team-name" :href="leader.url">{{ leader.teamName }}</a>
          <div class="fundraising-meter progress">
            <span class="meter" :style="'width: ' + leader.percentage + '%;'"><small class="small-text">{{ leader.totalRaised }}</small></span>
          </div>
        </div>
    </li>`;

Vue.component('leader', {
  props: ['leader'],
  template: leaderTemplate
})
var app7 = new Vue({
  el: '#teamLeaderBoard',
  data: {
    leaders: [
      {
        id: 0,
        teamName: 'InsideFlyer',
        url: 'https://www.kiva.org/team/insideflyer',
        imageUrl: 'https://www-kiva-org-2.global.ssl.fastly.net/img/s135/5c668087e977d0342013ed7d42018ba9.jpg',
        totalRaised: '$58,400',
        percentage: '59'
      },
      {
        id: 1,
        teamName: 'Team CANADA',
        url: 'https://www.kiva.org/team/team_canada',
        imageUrl: 'https://www-kiva-org-1.global.ssl.fastly.net/img/s135/54d590acc89b472919a715348daa5837.jpg',
        totalRaised: '$8,400',
        percentage: '32'
      },
      {
        id: 2,
        teamName: 'Nerdfighters',
        url: 'https://www.kiva.org/team/nerdfighters',
        imageUrl: 'https://www-kiva-org-2.global.ssl.fastly.net/img/s135/1364412.jpg',
        totalRaised: '$111,400',
        percentage: '84'
      },
    ]
  }
})

/* Original HTML

<li class="team-score row collapse">
<div class="columns small-3">
                <a class="thumb" href="https://www.kiva.org/team/insideflyer"><img src="https://www-kiva-org-2.global.ssl.fastly.net/img/s135/5c668087e977d0342013ed7d42018ba9.jpg"></a>
</div>
<div class="columns small-9">
    <a class="team-name" href="https://www.kiva.org/team/insideflyer">InsideFlyer</a>
    <div class="fundraising-meter progress">
    <span class="meter" style="width: 59%"><small class="small-text">$58,400</small></span>
    </div>
</div>
</li>

*/