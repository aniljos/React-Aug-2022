import {Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);

        console.log("Counter props", this.props);
    }

    render(){
        //return the JSX(View)
        return (
            <div>
                <h3>Count : {this.props.initCount}</h3>
                <p>This is a Class Component</p>
            </div>
        )
    }
}

export default Counter;