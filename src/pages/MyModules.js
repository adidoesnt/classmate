import {useContext} from 'react';
import MyModulesContext from '../store/myModulesContext';
import ModuleList from '../components/modules/ModuleList';
import {Card, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function MyModules() {
    const modulesContext = useContext(MyModulesContext);
    const noModules = modulesContext.totalModules === 0;
    return !noModules ? (<section>
        <h1 className='text-center mb-4'>Enrolled Modules</h1>
        <ModuleList modules = {modulesContext.myModules}/>
    </section>) : ( <Container className='d-flex align-items-center justify-content-center'
      style={{minHeight: '50vh'}}>
        <Card>
            <div className='w-100' style ={{maxWidth: '400px'}}>
                No modules selected. <Link to='/all'>Select modules?</Link>
            </div>
        </Card>
      </Container>);
}

export default MyModules;