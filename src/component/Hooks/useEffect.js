import {React, useEffect, useState} from 'react';
import "./style.css";

const UseEffect = () => {

    const initialData = 10;
    const [myNum, setMyNum] = useState(initialData);

    
    // useEffect(() => {
    //     document.title = `chats(${myNum})`;
    // }, []); // updates only during reload time
    
    
    useEffect(() => {
        document.title = `chats(${myNum})`;
    }); // updates every time

    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div className="button2" onClick={() => setMyNum(myNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={() => myNum > 0 ? setMyNum(myNum-1) : setMyNum(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
  )
}

export default UseEffect