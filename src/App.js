import {Routes, Route} from 'react-router-dom';

import AllModules from './pages/AllModules';
import MyModules from './pages/MyModules';
import Layout from './components/layout/Layout';
import Signup from './components/login/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Layout>
      <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/all' element={<AllModules/>}/>
          <Route path='/me' element={<MyModules/>}/>
      </Routes> 
    </Layout>
  );
}

export default App;