import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
class AddNewTask extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            txtAddNewTask: '',
            txtDescription: '',
            piority: 'normal',
            startDate: new Date(),
        }
    }
    onChange= (event)=>{
        var target= event.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event)=>
    {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
    render() {
        const bStyle = {
            fontSize: 12,
            font: 'Source San Pro'
        }
        const newTaskStyle = {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: 18,
            font: 'Source San Pro'
        }
        const addNewTaskStyle = {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }
        const textarearStyle = {
            width: '100%',
            height: 129
        }
        return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{ border: 'solid 1px black', width: '100%' }}>
                <div className="addNewTask" style={newTaskStyle}>
                    <b><p style={newTaskStyle}>New Task</p></b>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="addnewtask" style={{ padding: 20 }}>
                        <input
                            type="text"
                            name="txtAddNewTask"
                            value={this.state.txtAddNewTask}
                            style={addNewTaskStyle}
                            onChange={this.onChange}
                            placeholder="Add new task..."
                        />
                    </div>
                    <div style={{ padding: 20 }}>
                        <div className="Descripton">
                            <p><b style={bStyle}>Description</b></p>
                            <textarea
                                style={textarearStyle}
                                name="txtDescription"
                                value={this.state.txtDescription}
                                onChange={this.onChange}
                            ></textarea>
                        </div>
                        <div className="row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <p><b style={bStyle}>Due date</b></p>
                                <DatePicker
                                    name="date"
                                    style={addNewTaskStyle}
                                    selected={this.state.startDate}
                                    onChange={(date) => { this.setState({ startDate: date }) }}
                                    minDate={new Date()}
                                ></DatePicker>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <p><b style={bStyle}>Piority</b></p>
                                <select
                                    name='piority'
                                    value={this.state.piority}
                                    onChange={this.onChange}
                                    style={{ width: '100%', height: 30 }}
                                >
                                    <option value='low'>low</option>
                                    <option value='normal'>normal</option>
                                    <option value='high'>high</option>
                                </select>
                            </div>
                        </div>
                        <div style={{ marginTop: 40 }}>
                            <button type="submit" className="btn btn-success" style={{ width: '100%' }}>Add</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}
export default AddNewTask;