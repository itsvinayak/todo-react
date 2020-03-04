import React,{Component} from 'react';
import '../css/main.css';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      userInput : "",
      list:[]
    }
  }

  updateInput(value){
    this.setState({
      userInput: value,
    });
  }

  addItem(){
    if(this.state.userInput !== '' ){
      const userInput = {
        id :  Math.random(),
        value : this.state.userInput
      };
      const list = [...this.state.list];
      list.push(userInput);

      this.setState({
        list,
        userInput:""
      });
    }
  }

  deleteItem(key){
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id !== key);
    
    this.setState({
      list:updateList,
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
             value = {this.state.userInput}
             onChange = {item => this.updateInput(item.target.value)}
          />
        <button
          onClick = {()=>this.addItem()}
        >
        ADD
       </button>
       <ul>
         {this.state.list.map(item => {return(
           <li key={item.id}>
              {item.value}
              <button
                className="delete"
                onClick = { () => this.deleteItem(item.id) }>
                X
              </button>

           </li>
         )})}
       </ul>
       </div>
      </div>
    );
  }
}

export default App;
