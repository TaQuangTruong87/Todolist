import React, { Component } from 'react';
class BulkAction extends Component {
    render() {
        return (
            <div className="row" style={{ border: 'solid 1px black', marginTop: 11, padding: 20, backgroundColor: '#e0e0e0' }}>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <p>Bulk Action:</p>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button type="button" className="btn btn-primary">Done</button>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button type="button" className="btn btn-danger" >Remove</button>
                </div>
            </div>
        );
    }
}
export default BulkAction;