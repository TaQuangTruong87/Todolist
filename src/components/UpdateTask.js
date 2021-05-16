import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
class UpdateTask extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            startDate: new Date(),
        }
    }
    render() {
        var { tasks } = this.props;
        const textarearStyle = {
            width: '100%',
            height: 129
        }
        const bStyle = {
            fontSize: 12,
            font: 'Source San Pro'
        }
        const addNewTaskStyle = {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }
        return (
            <div className="newTask" style={{ padding: 20, border: 'solid 1px black' }}>
                <div>
                    <input type="text" style={addNewTaskStyle} defaultValue={tasks.txtAddNewTask}></input>
                </div>
                <div className="Descripton">
                    <p><b style={bStyle}>Description</b></p>
                    <textarea style={textarearStyle} defaultValue={tasks.txtDescription}></textarea>
                </div>
                <div className="row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <p><b style={bStyle}>Due date</b></p>
                        <DatePicker style={addNewTaskStyle}
                            selected={this.state.startDate}
                            onChange={(date) => { this.setState({ startDate: date }) }}
                            minDate={new Date()}
                        ></DatePicker>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <p><b style={bStyle}>Piority</b></p>
                        <select style={{ width: '100%', height: 30 }}
                            defaultValue={tasks.piority}
                        >
                            <option value='low'>low</option>
                            <option value='normal'>normal</option>
                            <option value='high'>high</option>
                        </select>
                    </div>
                </div>
                <div style={{ marginTop: 40 }}>
                    <button type="button" className="btn btn-success" style={{ width: '100%' }}>Update</button>
                </div>
            </div>
        );
    }
}
export default UpdateTask;