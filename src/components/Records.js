import React, { Component } from 'react';
import Record from './Record';
import { load_records } from '../actions';
import { connect } from 'react-redux'

class Records extends Component {
    componentDidMount() {
        this.props.load_records();
    }
    render() {
        const { error, isLoaded, records } = this.props.records;
        const loadingView = (
            <div>
                Loading......
            </div>
        );
        const errorView = (
            <div>
               {error}
            </div>
        );
        const recordsView = (
            <div>
                <table className="table table-border">
                    <thead>
                        <tr>
                            <th>日期</th>
                            <th>内容</th>
                            <th>总额</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records.map(record => (
                                <Record key={record.id} {...record} ></Record>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );

        let view = null;
        if (!isLoaded) {
            view = loadingView
        }
        else {
            if (error) {
                view = errorView
            }
            else {
                view = recordsView
            }
        }
        return (
            view
        )
    }
}

const mapStateToProps = (state) => {
    return {
        records: state.records
    }
}


export default connect(mapStateToProps, { load_records })(Records)
