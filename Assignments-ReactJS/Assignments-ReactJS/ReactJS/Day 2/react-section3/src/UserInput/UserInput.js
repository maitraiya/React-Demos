import React from 'react';
import './InputStyle.css';

const UserInput =(props) =>{
    return(
        <div>
            <input className="Input" type="number" placeholder="Offer you want on Sparx Loafers ?" onChange={props.inputChange}></input>
        </div>
    );

}
export default UserInput