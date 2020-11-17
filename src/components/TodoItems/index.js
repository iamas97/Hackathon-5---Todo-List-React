import "./style.css";
import React, { Component } from "react";
import InputTodo from "../Add";

export default class ToDoItems extends Component {
  constructor(props) {
    super(props);
    console.log("TODo  started",this.props.item.id);
    this.state = {
      showTag:<p className="todo-text list">{this.props.item.text}</p>
    }
    
  }
  save = (t)=>{
    console.log('saved',t);
    this.props.CallBackFn[1](t,this.props.item.id);
    this.setState({
      showTag:<p className="todo-text list">{this.props.item.text}</p>
    })
    
  }
  
  edit=()=>{
    this.setState({
      showTag:<InputTodo addCallBC={this.save} buttonText="Save" inp={this.props.item.text} inpId={["editTask","save"]}/>
    })

  }
  delete = ()=>{
    this.props.CallBackFn[0](this.props.item.id);
  }
  
  
  render() {
    
    return (
      <div className="todo-div">
        {this.state.showTag}
        <div className="todo-button">
          <button class="edit" onClick={this.edit}>Edit</button>
          <button class="delete" onClick={this.delete}>Delete</button>
        </div>
      </div>
    );
  }
}
