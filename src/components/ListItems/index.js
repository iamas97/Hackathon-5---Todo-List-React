import "./style.css";
import React, { Component } from "react";
import ToDoItems from "../TodoItems";

export default class ListItems extends Component {
  constructor(props) {
    super(props);
  }
  
  list = ()=>{
    return <ul>{this.props.li.map((item,i)=>(
      <ToDoItems key={item.id} item={item} CallBackFn = {this.props.CallBackFn} />
    ))}</ul>
  }
  
  render() {
    
    return (
      <div id="lists">
        <h3>Lists are:</h3>
        {this.list()}
      </div>
    );
  }
}
