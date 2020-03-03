import React from 'react';
import '../css/main.css';


const Item = (props) => {
  console.log(props);
  return(
    <li key={props.id}>
      {props.value}
       <button className="delete">X</button>
    </li>
  )
};

export default Item;
