import React,{Component} from 'react';
import CounterOutput from '../Components/CounterOutput/CounterOutput';
import CounterControl from '../Components/CounterControl/CounterControl';
import { connect } from 'react-redux';
class Counter extends Component{
   
    changeHandler=(key,value)=>{
        let ctr =null;

        switch(key)
        {
            case 'add':
                ctr = this.state.counter
                this.setState({
                    counter: ctr+1
                });
            break;
            case 'sub':
                ctr = this.state.counter
                this.setState({
                    counter: ctr-1
                });
            break;
            case 'add5':
                ctr = this.state.counter
                this.setState({
                    counter: ctr+value
                });
            break;
            case 'sub10':
                ctr = this.state.counter
                this.setState({
                    counter: ctr-value
                });
            break;

        }
    }
    render(){
        return(
            <div>
                <CounterOutput  value={this.props.ctr} />
                <CounterControl label={'add'} clicked={this.props.onIncrementCounter}/>
                <CounterControl label={'sub'} clicked={this.props.onDecrementCounter}/>
                <CounterControl label={'add 5'} clicked={this.props.onIncrementCounterBy5}/>
                <CounterControl label={'sub 10'} clicked={this.props.onDecrementCounterBy10}/>
                <button onClick={()=>{this.props.StoreResults(this.props.ctr)}}>Store Result</button>
                <ul>
                    {this.props.stored_results.map(result =>(
                        <li key={result.id}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        ctr:state.ctr.counter ,
        stored_results:state.res.results
    };
};
const mapDispatchToProps = dispatch =>{
    return {
            onIncrementCounter : ()=> dispatch({type:'INCREMENT'}) ,
            onDecrementCounter : ()=> dispatch({type:'DECREMENT'}) ,
            onIncrementCounterBy5 : ()=> dispatch({type:'INCREMENTBY5',value:5}) ,
            onDecrementCounterBy10 : ()=> dispatch({type:'DECREMENTBY10',value:10}),
            StoreResults : (ctr)=> dispatch({type:'STORE_RESULTS',res:ctr})
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);