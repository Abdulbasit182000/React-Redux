import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {incNumber, decNumber, redcolor, greencolor} from './actions/index';

function App() {
  const myState = useSelector( (state) => state.changeTheNumber);
  const colorState = useSelector((state) => state.changeColor)
  const dispatch = useDispatch();
  return (
      <div className="App" style={{backgroundColor:colorState}}>
        <header className="App-header">
          <h1>Welcome to Redux</h1>
          <h4>using react and redux</h4>
          <div className="quantity">
            <a className="quantity_minus" title="Decrement"
            onClick={ () => {
              dispatch(decNumber());
              dispatch(redcolor());
            }}> <span> - </span></a>
            <input name="quantity" type="text" className="quantity_input" value= {myState}/>
            <a className="quantity_plus" title="Increment"
            onClick={() => {
              dispatch(incNumber());
              dispatch(greencolor());
            }}> <span> + </span></a>
          </div>
        </header>
      </div>
  );
}

export default App;
