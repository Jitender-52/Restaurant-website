import {React, useReducer, useState} from 'react';
// import { useState } from "react";
import "./style.css";

const reducer = (state, action) => {
    if(action.type === "INCR")
    {
        state += 1;
    }
    if(state > 0 && action.type === "DECR")
    {
        state -= 1;
    }
    return state;
}

const UseReducer = () => {

    // const initialData = 10;
    // const [myNum, setMyNum] = useState(initialData);

    const initialData = 10;
    const[state, dispatch] = useReducer(reducer, initialData);

  return (
        <div className="center_div">
            <p>{state}</p>
            <div className="button2" onClick= {() => dispatch({type: "INCR"})}>  {/* we can anyname in place of type. */}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div className="button2" onClick={() => dispatch({type: "DECR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>
        </div>
  )
}

export default UseReducer