import React from 'react';
import TeamsOverview from './components/TeamsOverview';
import TeamsListing from './components/TeamsListing';
import TeamsLeaderboards from './components/TeamsLeaderboards';

export default function App() {
  return (
    <div id="app" className="teams-landing container">
      <div className="row">
        <div className="small-12 large-8 columns">
          <TeamsOverview />
          <TeamsListing />
        </div>
        <div className="columns small-12 large-4">
          <TeamsLeaderboards />
        </div>
      </div>
    </div>
  );
};
