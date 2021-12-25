import {Routes, Route} from 'react-router-dom';

import AllModules from './pages/AllModules';
import MyModules from './pages/MyModules';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
          <Route path='/' element={<AllModules/>}/>
          <Route path='/me' element={<MyModules/>}/>
      </Routes> 
    </Layout>
  );
}

export default App;