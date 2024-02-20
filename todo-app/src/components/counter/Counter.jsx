
import { useState} from 'react';
import {PropTypes} from 'prop-types';
import './Counter.css'
import CounterButton from './CounterButton'



export default function Counter(){
    
    const [count, setCount] = useState(0)


    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }

    function decrementCounterParentFunction(by){
        setCount(count - by)
    }
    function resetCounter(){
        setCount(0)
    }

    // 상위 컴포넌트의 메서드를 하위 컴포넌트에서 그냥 호출은 안됨. 메서드를 넘겨줘야함.
    return (

    
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod = {incrementCounterParentFunction} decrementMethod = {decrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod = {incrementCounterParentFunction} decrementMethod = {decrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod = {incrementCounterParentFunction} decrementMethod = {decrementCounterParentFunction}/>
    
            <button className="resetButton" 
                onClick={resetCounter}
                >reset</button>
        </>


    )
}
 

CounterButton.propTypes = {
    by: PropTypes.number
}


CounterButton.defaultProps = {
    by: 1
}