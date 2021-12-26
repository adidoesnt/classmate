import {Outlet, Navigate} from 'react-router-dom';
import {useAuth} from '../store/AuthContext';

function PrivateRoute({component: Component, ...rest}){
    const {currentUser} = useAuth();
    return  currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;