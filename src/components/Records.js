import React, { PureComponent } from 'react';
import Record from './Record';

class Records extends PureComponent {
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

export default Records
