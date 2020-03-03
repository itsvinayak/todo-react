import React,{Component} from 'react';
import Item from './item.js';
import '../css/main.css';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      newItem : "",
      list:[]
    }
  }

  updateInput(key,value){
    this.setState({
      [key]:value,
    });
  }

  addItem(){
    const newItem = {
      id :  Math.random(),
      value : this.state.newItem
    };
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }
  render(){
    return(<div className="App">
          <h1> TODO LIST</h1>
          <hr/>
          <div className="box">
          <input
             type="input"
             placeholder="add item . . . "
             value = {this.state.newItem}
             onChange = {item => this.updateInput("newItem",item.target.value)}
          />
        <button
          onClick = {()=>this.addItem()}
        >
        ADD
       </button>
       <ul>
         {this.state.list.map(item => {return(<Item props={item}   />)})}
       </ul>
       </div>
      </div>
    );
  }
}

export default App;
