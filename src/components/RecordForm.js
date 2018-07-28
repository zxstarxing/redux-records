import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_record } from '../actions'

class RecordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:"",
            title:"",
            amount:""
        }
        
    }
    handleChange(event)
    {
        let {name,value}  = event.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        let record = {
            date:this.state.date,
            title:this.state.title,
            amount:Number.parseInt(this.state.amount,10)
        }
        this.props.add_record(record);
        
    }
    validate()
    {
        return this.state.date&&this.state.title&&this.state.amount;
    }
    render() {
        return (
            <form className="form-inline mt-2 mb-2" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group mr-2">
                    <input type="date" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Date" name="date" value={this.state.date}/>
                </div>
                <div className="form-group mr-2">
                    <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Title" name="title" value={this.state.title}/>
                </div>
                <div className="form-group mr-2">
                    <input type="number" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Amount" name="amount" value={this.state.amount}/>
                </div>
                <button type="submit" disabled={!this.validate()} className="btn btn-primary">提交</button>
            </form>
        )
    }
}

export default connect(null, {add_record})(RecordForm);
