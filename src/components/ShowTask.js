import React, { Component } from 'react';
// import UpdateTask from './UpdateTask';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
class ShowTask extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      isDisplayForm: false,
      startDate: new Date(),
      id: '',
    }
  }
  onUpdate= ()=>{
      this.props.onUpdate(this.props.tasks.id)
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
      <div className="active" style={{ marginTop: 20, padding: 20 }}>
        <div className="row" style={{ padding: '10px 0px', margin: '0px 0px', border: 'solid 1px black' }}>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{ padding: 20 }}>
            <input type="checkBox"/>{tasks.txtAddNewTask}
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <button
              type="button"
              className="btn btn-info"
              onClick={() => { this.setState({ isDisplayForm: true }) }}
            >Detail</button>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => { this.setState({ isDisplayForm: false }) }}
            >Remove</button>
          </div>
        </div>
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
              <DatePicker 
                style={addNewTaskStyle}
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
            <button 
            type="button" 
            className="btn btn-success" 
            style={{ width: '100%' }} 
            onClick={this.onUpdate}
            >Update</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ShowTask;