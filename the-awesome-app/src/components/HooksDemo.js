import React, { useState, useCallback, useRef, useImperativeHandle } from 'react';


// React.memo ==> 16.3 ==>rerenders the component only if state or props changes
const Simple =React.memo(React.forwardRef((props, ref) => {

    useImperativeHandle(ref, () => {

        //object returned is what the ref will have access to
        return {
            message: "This a simple compoment",
            display: display,
            value: props.value
        }
    })

    console.log("executing simple..");

    function display(){
        alert("value: " +  props.value);
    }

    return (
        <div>
            <h4>Simple</h4>
            <p>Value: {props.value}</p>
        </div>
    );
}));



const HooksDemo = () => {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    const simpleRef = useRef(null);

    function invoke(){
        console.log("simpleRef", simpleRef);
        simpleRef.current.display();
    }

    const update= useCallback(() => {
        
        setCount(count + 1);

    }, [count]);


    return (
        <div>
            <h3>UseCallback Demo</h3>

            <div>
                <p className="alert alert-primary">Count: {count}</p>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <br/>
            <div>
                <input className='form-control' placeholder="Message" value={message} 
                                                    onChange={evt => setMessage(evt.target.value)}/>
                <p className="alert alert-warning">Message: {message}</p>
            </div>
            <div>
                <button className='btn btn-warning' onClick={invoke}>Invoke</button>
            </div>
            
            <Simple ref={simpleRef} value={count} onUpdate={update}/>
        </div>
    )
}

export default HooksDemo;