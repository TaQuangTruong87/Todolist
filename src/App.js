import React, { Component } from 'react';
import AddNewTask from './components/AddNewTask';
import BulkAction from './components/BulkAction';

import Search from './components/Search';
import ShowTask from './components/ShowTask';
// import UpdateTask from './components/UpdateTask';

// import "react-datepicker/dist/react-datepicker.css";
// time-picker component. using showTimeSelect as a main props and works with basic functionality on react-datepicker that explained aboveclass App extends Component {

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      tasks: [],
      taskEditing: null
    }
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }
  idRandom() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  onSubmit = (data) => {
    var { tasks } = this.state;
    data.id = this.idRandom();
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }
  onUpdate = (id) => {
    var task = this.state;
    var index = this.findIndex(id);
    var taskEditing = task[index];
    this.setState({
      taskEditing: taskEditing
    });
  }
  render() {

    var { tasks } = this.state;
    const newTaskStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 18,
      font: 'Source San Pro'
    }
    var elmShowTask = tasks.map((tasks, index) => {
      return <ShowTask
        onUpdate={this.onUpdate}
        key={tasks.id}
        tasks={tasks}
        index={index} />
    });
    return (
      <div className="container" >
        <div className="row" style={{ border: 'solid 1px black' }}>
          <AddNewTask onSubmit={this.onSubmit} />
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7" style={{ border: 'solid 1px black', width: '100%' }}>
            <div className="header" style={newTaskStyle}>
              <b><p style={newTaskStyle}>To Do List</p></b>
            </div>
            <div className="addnewtask" style={{ padding: 20 }}>
              <Search />
            </div>
            {elmShowTask}
            <div className="bulkAction">
              <BulkAction />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
