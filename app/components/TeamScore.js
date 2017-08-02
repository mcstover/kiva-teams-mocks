import React, { Component } from 'react';

export default class TeamScore extends Component {
  render() {
    return (
      <li className="team-score row collapse">
        <div className="small-3 columns">
          <a className="thumb" href={this.props.team.url}><img src={this.props.team.img_url} /></a>
        </div>
        <div className="small-9 columns">
          <a className="team-name" href={this.props.team.url}>{this.props.team.name}</a>
          <div className="fundraising-meter progress">
            <span className="meter" style={{width: this.props.team.progress_percent + '%'}}><small className="small-text">{this.props.team.lent_amount}</small></span>
          </div>
        </div>
      </li>
    );
  }
}
