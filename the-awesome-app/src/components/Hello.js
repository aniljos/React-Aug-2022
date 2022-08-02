
function Hello(props){

    console.log("Hello props", props);

    //return the JSX
    return (
        <div>
            <h3 style={{color: props.color}}>Message: {props.message}</h3>
            <p>This is a React Functional Component</p>
            <p>Generated @ {new Date().toLocaleString()}</p>
        </div>
        
    )
}

export default Hello;