import React, { Component } from 'react';
import './App.css';
import Records from './components/Records';
import RecordForm from './components/RecordForm';
import AmountBox from './components/AmountBox';
import { connect } from 'react-redux';
import {load_records} from './actions';

class App extends Component {
  componentDidMount() {
    this.props.load_records();
  }
  render() {
    return (
      <div className="container-flud">
        <h1>收支日常</h1>
        <div className="row mt-2">
          <AmountBox text="收入" type="success" total={this.props.records.credit}/>
          <AmountBox text="支出" type="danger" total={this.props.records.debit} />
          <AmountBox text="余额" type="info"  total={this.props.records.balance} />
        </div>
        <RecordForm />
        <Records records={this.props.records} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      records: state.records
  }
}


export default connect(mapStateToProps,{load_records})(App);
