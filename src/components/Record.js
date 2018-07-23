import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { remove_record } from '../actions'
import { connect } from 'react-redux'
import{update_record} from '../actions'

class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            id:this.props.id,
            date: this.props.date,
            title: this.props.title,
            amount: this.props.amount
        }
    }

    handleDelete(id) {
        this.props.remove_record(id);
        this.setState({
            isEdit: false
        })
    }

    handleShowUpdate() {

        this.setState({
            isEdit: true
        })
    }

    handleUpdate() {
        let record = {
            date: this.state.date,
            title: this.state.title,
            amount:parseInt(this.state.amount,10)
        }
        this.props.update_record(this.state.id,record);
        this.setState({
            isEdit: false
        })
    }

    handleCancel() {
        this.setState({
            isEdit: false
        })
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const updateView = (
            <tr>
                <td><input className="form-control" onChange={this.handleChange.bind(this)} name="date" value={this.state.date} placeholder="Date" /></td>
                <td><input className="form-control" onChange={this.handleChange.bind(this)} name="title" value={this.state.date} placeholder="Title" /></td>
                <td><input className="form-control" onChange={this.handleChange.bind(this)} name="amount" value={this.state.amount} placeholder="Amount" /></td>
                <td>
                    <button className="btn btn-primary mr-2" onClick={() => this.handleUpdate()}>Update</button>
                    <button className="btn btn-info" onClick={() => this.handleCancel()}>Cancel</button>
                </td>
            </tr>
        );
        const showView = (
            <tr>
                <td>{this.state.date}</td>
                <td>{this.state.title}</td>
                <td>{this.state.amount}</td>
                <td>
                    <button className="btn btn-info mr-2" onClick={() => this.handleShowUpdate()}>Show</button>
                    <button className="btn btn-danger" onClick={() => this.handleDelete(this.state.id)}>Delete</button>
                </td>
            </tr>
        );
        return (
            this.state.isEdit ? updateView : showView
        )
    }
}

Record.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default connect(null, { remove_record,update_record })(Record);
