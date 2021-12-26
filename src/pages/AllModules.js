import ModuleList from "../components/modules/ModuleList";
import {useState, useEffect} from 'react'
import {Card, Container} from 'react-bootstrap';

function AllModules() {
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
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
        setLoading(false);
      });
    }, [])

    return (!loading ? (
        <section>
            <h1 className='text-center mb-4'>All Modules</h1>
            <ModuleList modules={modules}/>
        </section>
      ) : <Container className='d-flex align-items-center justify-content-center'
      style={{minHeight: '50vh'}}>
        <Card>
          <div className='w-100' style ={{maxWidth: '400px'}}>Loading...</div>
        </Card>
      </Container>
    );
}

export default AllModules;