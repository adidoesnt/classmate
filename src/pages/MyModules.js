import {useContext} from 'react';
import MyModulesContext from '../store/myModulesContext';
import ModuleList from '../components/modules/ModuleList';

function MyModules() {
    const modulesContext = useContext(MyModulesContext);
    return <section>
        <h1>Enrolled Modules</h1>
        {console.log(modulesContext.myModules)}
        <ModuleList modules = {modulesContext.myModules}/>
    </section>
}

export default MyModules;