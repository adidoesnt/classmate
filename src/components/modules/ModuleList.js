import Module from './Module'

function ModuleList(props) {
    return <ul>
        {props.modules.map(module => ( module.description.length > 200 ?
            (<Module
                key = {module.id}
                code = {module.moduleCode}
                title = {module.title}
                description = {module.description}
                mcs = {module.moduleCredit}
            />) : null)
        )}
    </ul>
}

export default ModuleList;