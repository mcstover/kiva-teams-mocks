import React, { Component } from 'react';

export default class TeamCard extends Component {
  render() {
    return (
      <article className="row">
        <div className="team-image small-5 small-centered medium-3 medium-uncentered columns">
          <a href={this.props.team.url}><img src={this.props.team.img_url} alt={this.props.team.name} title={this.props.team.name} width="135" height="135" /></a>
        </div>
        <div className="team-desc medium-9 columns">
          <h2><a href={this.props.team.url} title={this.props.team.name}>{this.props.team.name}</a></h2>
          <div className="description">
            <div className="stats small-text">
              <span className="memberCount">{this.props.team.member_count}</span> members have lent <span className="lentAmount">{this.props.team.lent_amount}</span> in <span className="loanCount">{this.props.team.loan_count}</span> loans
            </div>
            <div className="info small-text">
              <span className="location">{this.props.team.location}</span>
              <span className="category">Category: {this.props.team.category}</span>
              <span className="createdDate">Team since: {this.props.team.create_time}</span>
            </div>
            <div className="loanBecause">We loan because: {this.props.team.loan_because}</div>
          </div>
          <div className="join">
            <a className="button setting" href={'https://www.kiva.org/teams/join/process?team_id=' + this.props.team.id} title="Join team">Join Team</a>
          </div>
        </div>
      </article>
    );
  }
}
