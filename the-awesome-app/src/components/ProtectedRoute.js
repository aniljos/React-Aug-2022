import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function ProtectedRoute(props){

    const auth = useSelector((state) => {return state.auth} );

    //const isAuth = sessionStorage.getItem("isAuth");

    if(auth && auth.isAuth){

        // props.children is the inner HTML
        return props.children;
    }
    else{
        return <Navigate to="/login" />
    }

    
}

export default ProtectedRoute;