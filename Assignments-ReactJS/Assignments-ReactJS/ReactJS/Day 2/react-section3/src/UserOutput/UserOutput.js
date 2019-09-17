import React , {useEffect} from 'react';
import {StyleRoot} from 'radium';

const box= {
    margin:'50px',
    padding:'20px',
    border:'2px solid #eee',
    display:'inline-block',
    boxShadow:'2px 2px #bbb',
    '@media(max-width:500px)':{
        backgroundColor: 'yellow'
    },

};
const UserOutput =(props) => {
    return(
        <StyleRoot>
        <div style={box}>
            <p>
                Offer available for {props.productName} !
            </p>
            <p>
                Get Instant Cashback upto {props.cashback} Rs !  
            </p>
        </div>
        </StyleRoot>
    );
}

export default UserOutput;
