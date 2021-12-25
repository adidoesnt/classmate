import Module from './Module'

function ModuleList(props) {
    return <ul>
        {props.modules.map(module => (
            <Module
                key = {module.id}
                code = {module.moduleCode}
                title = {module.title}
                description = {module.description}
                mcs = {module.moduleCredit}
            />)
        )}
    </ul>
}

export default ModuleList;