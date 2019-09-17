import React,{Component} from 'react';
import main from '../../Assets/css/main.module.css';


class CartItem extends Component{
    render(){
        return(
        <div>
            <div className={main["limiter"]}>
                <div className={main["container-table100"]}>
                    <div className={main["wrap-table100"]}>
                        <div className={main["table100"]}>
                            <table>
                                <thead>
                                    <tr className={main["table100-head"]}>
                                            <th className={main["column1"]}>ID</th>
                                            <th className={main["column1"]}>Title</th>
                                            <th className={main["column2"]}>Category</th>
                                            <th className={main["column3"]}>Price</th>
                                            <th className={main["column4"]}>Quantity</th>								
                                            <th className={main["column5"]}>Amount</th>							
                                        </tr>
                                </thead>
                                {this.props.arr.map(item =>
                                item.quantity>0?
                                <tbody key={item.id}>
                                        <tr>
                                            <td className={main["column1"]}>{item.id}</td>
                                            <td className={main["column1"]}>{item.title}</td>
                                            <td className={main["column2"]}>{item.category}</td>
                                            <td className={main["column3"]}>{item.price}</td>
                                            <td className={main["column4"]}>{item.quantity}</td>								
                                            <td className={main["column5"]}>{item.price*item.quantity}</td>							
                                        </tr>		
                                </tbody>
                                :''
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default CartItem;