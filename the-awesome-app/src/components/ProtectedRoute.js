import {Navigate} from 'react-router-dom';

function ProtectedRoute(props){

    const isAuth = sessionStorage.getItem("isAuth");

    if(isAuth && isAuth === "true"){

        // props.children is the inner HTML
        return props.children;
    }
    else{
        return <Navigate to="/login" />
    }

    
}

export default ProtectedRoute;