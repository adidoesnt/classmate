import ModuleCard from "../interface/moduleCard";
import {useContext} from 'react';
import MyModulesContext from '../../store/myModulesContext';

function Module(props) {
    const enrolledContext = useContext(MyModulesContext);
    const moduleSelected = enrolledContext.moduleEnrolled(props.code);

    function toggleEnrolmentHandler() {
        if(moduleSelected) {
            enrolledContext.dropModule(props.code);
        } else {
            enrolledContext.enrolModule({
                moduleCode: props.code,
                title: props.title,
                description: props.description,
                moduleCredit: props.mcs
            });
        }
    }

    return <li>
        <ModuleCard>
            <div>
                <h3>
                    {props.code}: {props.title}
                </h3>
                <p>{props.mcs} Module Credits</p>
                <p>{props.description}</p>
            </div>
            <div>
                <button onClick = {toggleEnrolmentHandler}>{
                    moduleSelected ? 'Drop' : 'Enrol'
                }</button>
            </div>
        </ModuleCard>
    </li>
}

export default Module;