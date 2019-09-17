import React from 'react'

const Validation =(props) =>{
    var status ="";
    if(props.len>=5)
    {
        status = "Text Long enough";
    }
    else
    {
        status = "Text too short"
    }
    return(
        <div>
            {status}
        </div>
    );

}
export default Validation;