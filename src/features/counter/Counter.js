import { useSelector,useDispatch } from "react-redux";
import React from "react";
import { increment, decrement,reset } from "./counterSlice";
const Counter=()=>{
    const count= useSelector(state => state.counter.count);
    const dispatch=useDispatch();
    return(
        <section><p>{count}</p>
        <div>
            <button onClick={()=>{ dispatch(increment())}}>+</button>
            <button onClick={()=>{ dispatch(decrement())}}>-</button>
        </div>
        <button onClick={()=>{ dispatch(reset())}}>Reset</button>
        </section>
    );
}
export default Counter