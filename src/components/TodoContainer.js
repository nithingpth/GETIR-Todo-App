import React, { Component } from 'react';
import axios from 'axios';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

class TodoContainer extends Component {
  backendBaseUrl = 'https://languid-suave-aunt.glitch.me/list';
  state = {
    list: [],
  };

  addItem = (item) => {
    var list = [...this.state.list];
    list.push(item);

    axios.post(this.backendBaseUrl, item).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    this.setState({ list });
  };

  editItem = (item) => {
    var list = [...this.state.list];
    var index = list.findIndex((x) => x.id == item.id);
    list[index] = { ...item };

    axios.patch(`${this.backendBaseUrl}/${item.id}`, item).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    this.setState({ list });
  };

  deleteItem = (item) => {
    var list = this.state.list.filter((x) => x.id != item.id);

    axios.delete(`${this.backendBaseUrl}/${item.id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    this.setState({ list });
  };

  componentDidMount() {
    axios.get(this.backendBaseUrl).then((res) => {
      const list = res.data;
      this.setState({ list });
    });
  }

  render() {
    return (
      <div id="todo-container">
        <div id="title" className="field">
          Todo App1
        </div>
        <div id="add-item-container" className="field">
          <TodoAdd addItem={this.addItem} />
        </div>
        <div id="item-list" className="field">
          <TodoList
            list={this.state.list}
            editItem={this.editItem}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
