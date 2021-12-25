import {createContext, useState} from "react";

const MyModulesContext = createContext({
    myModules: [],
    totalModules: 0
});

export function MyModulesContextProvider(props) {
    const[enrolledModules, setEnrolledModules] = useState([]);
    const context = {
        myModules: enrolledModules,
        totalModules: enrolledModules.length,
        enrolModule: enrolModuleHandler,
        dropModule: dropModuleHandler,
        moduleEnrolled: moduleEnrolledHandler
    };

    function enrolModuleHandler(enrolledModule) {
        setEnrolledModules((latestEnrolledModules) => {
            return latestEnrolledModules.concat(enrolledModule);
        });
    }

    function dropModuleHandler(moduleCode) {
        setEnrolledModules((latestEnrolledModules)=>{
            return latestEnrolledModules.filter(module => moduleCode !== module.moduleCode);
        });
    }

    function moduleEnrolledHandler(moduleCode) {
        return enrolledModules.some(module => module.moduleCode === moduleCode);
    }

    return <MyModulesContext.Provider value = {context}>
        {props.children}
    </MyModulesContext.Provider>
}

export default MyModulesContext;