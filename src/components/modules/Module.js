import ModuleCard from "../interface/moduleCard";

function Module(props) {
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
                <button>Enrol</button>
            </div>
        </ModuleCard>
    </li>
}

export default Module;