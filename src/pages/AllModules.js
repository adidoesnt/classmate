import ModuleList from "../components/modules/ModuleList";
import {useState, useEffect} from 'react'

function AllModules() {
    const [modules, setModules] = useState([]);

    useEffect(() => {
      fetch('https://api.nusmods.com/v2/2021-2022/moduleInfo.json')
      .then(repsonse => {
        return repsonse.json();
      }).then(data => {
        const temp = [];
        for(const key in data) {
          const module = {
            id: key,
            ...data[key]
          };
          temp.push(module)
        }
        setModules(temp);
      });
    }, [])

    return (
        <section>
            <h1>All Modules</h1>
            <ModuleList modules={modules}/>
        </section>
    );
}

export default AllModules;