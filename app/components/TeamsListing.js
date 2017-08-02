import React, { Component } from 'react';
import TeamCard from './TeamCard';

export default class TeamsListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {
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
      }
    };
  }

  render() {
    return (
      <div className="teams-listing">
        <ul>
          <li>
            <TeamCard team={this.state.team} />
          </li>
        </ul>
      </div>
    );
  }
}
