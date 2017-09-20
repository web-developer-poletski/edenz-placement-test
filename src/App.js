import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import '../node_modules/purecss/build/pure-min.css';

import Login from './containers/Login';
import Tests from './containers/Tests';

const mapStateToProps = state => {
  return { currentPage: state.pages.currentPage }
}

let App = props => {
  let Page;

  switch (props.currentPage) {
    case 'Login':
      Page = Login;
      break;
    case 'Tests':
      Page = Tests;
      break;
    default:
      Page = Login;
  }

  return (
    <div className='pure-g'>
      <div className='pure-u-1'>
        <h1>EDENZ Colleges Placement Test</h1>
      </div>

      <div className='pure-u'>
        <Page />
      </div>

    </div>
  );
}

App.propTypes = {
  currentPage: PropTypes.string.isRequired
}

App = connect(mapStateToProps)(App);

export default App;