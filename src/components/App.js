import React, { useState } from "react";
import "./../styles/App.css";
import InputTodo from "./Add";
import ListItems from "./ListItems";

function App() {
  const [listItems, setListItems] = useState([]);
  const [state,setState] = useState([]);
  const updateState = (updates)=>{
    updatedState = state;
    for(const p in updates){
      updateState[p] = updates[p];
    }
    setState(updatedState);
  }
  const addItem = (t) => {
    let l = {text:t,id:listItems.length}
    let li = [...listItems,l];
    
    setListItems(li);
    console.log("added",listItems);
  }
  const deleteItem = (id)=>{
    console.log(id);
    let l = listItems.filter((item)=>item.id!=id);
    console.log(l);
    setListItems(l);
  }
  const editItem = (text,id)=>{
    let l = listItems.map((item)=>{
      if(item.id==id){
        item.text = text;
      }
      return item;
    }
    );
    
    setListItems(l);
  }
  const callBackFn = [deleteItem,editItem]
  return (
    <div id="main">
      <InputTodo addCallBC={addItem} buttonText="Add" inp="" inpId={["task","btn"]} />
      <ListItems key={"listitems"} li={listItems}  CallBackFn={callBackFn}/>
    </div>
  );
}

export default App;
