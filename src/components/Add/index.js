import "./style.css"
import React,{Component} from "react";

export default class InputTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text :this.props.inp,
        }
    }
    change= (event)=>{
        this.setState({
            text:event.target.value,
        });
        
    }
    add =()=>{
        
        this.state.text.trim().length>0 && this.props.addCallBC(this.state.text);
        this.setState({
            text:"",
        });
    }
    render(){
        return (
            <div id="header">
                <input id={this.props.inpId?.[0] ?? ""} className={this.props.inpClass?.[0] ?? ""} className="new-todo" type="text" onChange={this.change} value={this.state.text}/>
                <button id={this.props.inpId?.[1] ?? ""} className={this.props.inpClass?.[1] ?? ""} onClick={this.add}>{this.props.buttonText}</button>
            </div>
        )
    }
}
