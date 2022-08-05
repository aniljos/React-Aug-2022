import React, { useState, useCallback } from 'react';


const Simple = (props) => {
    console.log("executing simple..");
    return (
        <div>
            <h4>Simple</h4>
        </div>
    );
};



const HooksDemo = () => {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    return (
        <div>
            <h3>UseCallback Demo</h3>

            <div>
                <p className="alert alert-primary">Count: {count}</p>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <div>
                <input className='form-control' placeholder="Message" value={message} onChange={evt => setMessage(evt.target.value)}/>
                <p className="alert alert-warning">Message: {message}</p>
            </div>
            
            
            <Simple/>
        </div>
    )
}

export default HooksDemo;