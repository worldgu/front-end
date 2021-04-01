import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default function WelcomePage() {
  return (
    <div className="home-welcome-page">
      <header className="app-header">
        <img src={require('../../images/rekit-react.png')} className="rekit-logo" alt="logo" />
        <h1 className="app-title">Welcome to Rekit React</h1>
      </header>
      <div className="app-intro">
        <h3>To get started:</h3>
        <ul>
          <li>
            Edit component <code>src/features/home/WelcomePage.js</code> for this page.
          </li>
          <li>
            Edit component <code>src/features/home/App.js</code> for the root container layout.
          </li>
          <li>
            To see examples, access:&nbsp;
            <Link to="/examples">/examples</Link>
          </li>
          <li>
            <div className="App">
              <Button type="primary">Button</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
