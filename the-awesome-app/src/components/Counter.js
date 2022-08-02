import {Component} from 'react';

class Counter extends Component{

    state = {
        count: 0
    };

    constructor(props){
        super(props);

        console.log("Counter props", this.props);
        //this.foo();
        this.state.count = this.props.initCount;
    }

    foo(){
        console.log("in foo", this);
    }

    //event handler ==> arrow functions
    inc = (evt) => {

        console.log("in inc", evt);
        console.log("this ref", this);
        //props is read-only
        //this.props.initCount++;

        ///this.state.count++;
        
        //this.setState(slice of the new/updated state, callback)
        //setState is async
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("state count", this.state.count);
        });
        

    }

    render(){
        //return the JSX(View)
        return (
            <div>
                <h3>Count : {this.state.count}</h3>
                <p>This is a Class Component</p>
                <div>
                    <button onClick={this.inc}>Inc</button> &nbsp;
                    <button>Decr</button>
                </div>
            </div>
        )
    }
}

export default Counter;