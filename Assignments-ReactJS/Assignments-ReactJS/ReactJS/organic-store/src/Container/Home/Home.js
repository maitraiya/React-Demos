import React, {Component} from 'react';
import backgroundImg from '../../Assets/bg.png';
import styles from '../Home/Home.module.css'
import { NavLink} from 'react-router-dom';
import * as actionCreator from '../../Action/ActionCreator'
import {connect} from 'react-redux';

class Home extends Component{
    render(){
        return(
            <div>
                <div>
                    <img src={backgroundImg} width='100%' alt=""></img>
                    <NavLink className={styles["button"]} to={{
                        pathname:'/product-details',
                        user:true
                    }}>PURCHASE NOW</NavLink>                  
                </div>
            </div> 
        );
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        
            userChangerFalse: ()=>dispatch(actionCreator.userChangerFalse()),        
            userChangerTrue: ()=>dispatch(actionCreator.userChangerTrue()),
    };
};
export default connect(null,mapDispatchToProps)(Home);