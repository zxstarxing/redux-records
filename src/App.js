import React, { Component } from 'react';
import './App.css';
import Records from './components/Records';
import RecordForm from './components/RecordForm';
import AmountBox from './components/AmountBox';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container-flud">
        <h1>收支日常</h1>
        <div className="row mt-2">
            <AmountBox text="收入" type="success" />
            <AmountBox text="支出" type="danger"/>
            <AmountBox text="余额" type="info"/>
        </div>
        <RecordForm/>
        <Records/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}


export default connect(mapStateToProps)(App);
