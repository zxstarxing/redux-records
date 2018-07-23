import React, { PureComponent } from 'react'

export default class AmountBox extends PureComponent {
    render() {
        return (
            <div className="col-sm-4">
                <div className="card">
                    <div className={`card-header bg-${this.props.type} text-white`}>
                        {this.props.text}
                    </div>
                    <div className="card-body">
                        78
                    </div>
                </div>
            </div>
        )
    }
}
