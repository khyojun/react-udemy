
import { useState} from 'react';
import {PropTypes} from 'prop-types';
import './Counter.css'



export default function Counter(){
    
    const [count, setCount] = useState(0)
    
    return (

    
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1}/>
            <CounterButton by={2}/>
            <CounterButton by={5}/>
        
        </>


    )
}





 function CounterButton({by}) {


    const [count, setCount] = useState(0);

    // useState를 사용하면 2개를 반환 state값, update할 함수
    // 위 경우처럼 지정하면 state값이 -> count, update하는 함수 -> setCount가 된다.

    function incrementCounterFunction(){
        setCount(count + by)
        console.log(count)
    }

    function decreaseCounterFunction(){
        setCount(count - by)
        console.log(count)
    }


    // onClick시에 함수 넣고 싶으면 중괄호 안에 함수이름으로 넣고 진행
    // js에서는 style에 - 표시가 허가되지 않음.
    return (
        <div className="Counter">
            <div>
                <button className="counterButton" 
                onClick={incrementCounterFunction}
                >+{by}</button>
                <button className="counterButton" 
                onClick={decreaseCounterFunction}
                >-{by}</button>
            </div>
          
        </div>


    )
}


CounterButton.propTypes = {
    by: PropTypes.number
}


CounterButton.defaultProps = {
    by: 1
}