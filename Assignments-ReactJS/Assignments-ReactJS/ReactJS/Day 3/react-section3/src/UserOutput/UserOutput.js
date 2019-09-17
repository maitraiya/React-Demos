import React from 'react';

const UserOutput = (props) =>{
const box= {
    margin:'50px',
    padding:'20px',
    border:'2px solid #eee',
    display:'inline-block',
    boxShadow:'2px 2px #bbb'
};
    return(
        <div style={box}>
            <p>
                Offer available for {props.productName} !
            </p>
            <p>
                Get Instant Cashback upto {props.cashback} Rs !  
            </p>
        </div>
    );
}

export default UserOutput;
