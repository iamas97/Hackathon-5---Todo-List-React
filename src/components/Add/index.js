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
                <input className="new-todo" type="text" onChange={this.change} value={this.state.text}/>
                <button onClick={this.add}>{this.props.buttonText}</button>
            </div>
        )
    }
}
