import React, { Component } from 'react';
import TodaysTasks from './components/today/TodaysTasks';
import { TomorrowsTasks } from './components/tomorrow/TomorrowsTasks';
import "./App.scss";

export default class App extends Component {

  render() {
    return (
      <div className="app-container">
        <div className="app-header">Tomorrow's Task</div>
        <div className="app-content">
          <TodaysTasks />
          <TomorrowsTasks />
        </div>
      </div>
    )
  }
}
