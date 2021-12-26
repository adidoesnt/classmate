import {Routes, Route} from 'react-router-dom';

import AllModules from './pages/AllModules';
import MyModules from './pages/MyModules';
import Layout from './components/layout/Layout';
import Signup from './components/login/Signup';
import Login from './components/login/Login';
import {AuthProvider} from './store/AuthContext';
import Profile from './pages/Profile';
import PrivateRoute from './pages/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/new' element={<Signup/>}/>
            <Route path='/all' element={<AllModules/>}/>
            <Route path='/me' element={<PrivateRoute/>}>
              <Route exact path = '/me' element = {<MyModules/>}/>
            </Route>
            <Route path='/profile' element={<PrivateRoute/>}>
              <Route exact path = '/profile' element = {<Profile/>}/>
            </Route>
            <Route path='reset' element={<ForgotPassword/>}/>
        </Routes> 
      </Layout>
    </AuthProvider>
  );
}

export default App;