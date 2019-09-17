import './Style.css';
import React from 'react';

const CounterOutput = (props) =>{
    return(
        <div className='strip'>
            <h1>Counter : {props.value}</h1>
        </div>
    );
}
export default CounterOutput;