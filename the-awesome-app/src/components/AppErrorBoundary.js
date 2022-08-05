import { Component } from "react";

class AppErrorBoundary extends Component{

    state = {
        hasError: false
    }

    componentDidCatch(error, info){

        if(error){
            this.setState({
                hasError: true
            });
        }
    }
    render(){

        if(this.state.hasError){
            return (
                <div className="alert alert-danger">Something went wrong..</div>
            )
        }
        else{
            return this.props.children;
        }

        
    }
}

export default AppErrorBoundary;