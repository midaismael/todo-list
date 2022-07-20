import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItem from "./components/AddItem/Additems";

class App extends Component{
  state = {
    items : [
      {id:1 , firstName:"Ahmed" , age: 21, importance:"high"},
      {id:2 , firstName:"ali" , age: 29, importance:"low"},
      {id:3 , firstName:"Farida" , age: 27, importance:"high"},
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items});
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items; 
    items.push(item);
    this.setState({items})
     
  }

  render () {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
