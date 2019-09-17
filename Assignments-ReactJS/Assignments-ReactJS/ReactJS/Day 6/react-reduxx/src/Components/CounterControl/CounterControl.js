import './Style.css';
import React from 'react';

const CounterControl = (props) =>{
    return(
        <div className='buttons' onClick={props.clicked}>
            <button>{props.label}</button>
        </div>
    );
}
export default CounterControl;