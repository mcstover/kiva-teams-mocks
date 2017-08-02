import React, { Component } from 'react';
import TeamScore from './TeamScore';

export default class TeamsLeaderboards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          id: 394,
          name: 'InsideFlyer',
          url: 'https://www.kiva.org/team/insideflyer',
          img_url: 'https://www-kiva-org-2.global.ssl.fastly.net/img/s135/5c668087e977d0342013ed7d42018ba9.jpg',
          lent_amount: '$58,400',
          progress_percent: 59
        },
        {
          id: 395,
          name: 'InsideFlyer',
          url: 'https://www.kiva.org/team/insideflyer',
          img_url: 'https://www-kiva-org-2.global.ssl.fastly.net/img/s135/5c668087e977d0342013ed7d42018ba9.jpg',
          lent_amount: '$8,400',
          progress_percent: 33
        },
        {
          id: 396,
          name: 'InsideFlyer',
          url: 'https://www.kiva.org/team/insideflyer',
          img_url: 'https://www-kiva-org-2.global.ssl.fastly.net/img/s135/5c668087e977d0342013ed7d42018ba9.jpg',
          lent_amount: '$188,400',
          progress_percent: 93
        }
      ]
    };
  }

  render() {
    return (
      <div className="teams-leaderboards">
        <h4>Team Leaderboards</h4>
        <p>Amount Loaned</p>
        <ul>
          {this.state.teams.map(team =>
            <TeamScore team={team} key={team.id.toString()} />
          )}
        </ul>
      </div>
    );
  }
}
