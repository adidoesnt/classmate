import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function Navigator() {
    return <header>
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand className='px-5'><h1>Classmate</h1></Navbar.Brand>
               <Nav className='ms-auto px-5'>
                    <ul>
                        <li className='p-2'>
                            <Link to ='/profile'>Profile</Link>
                        </li>
                        <li className='p-2'>
                            <Link to = '/all'>All Modules</Link>
                        </li>
                        <li className='p-2'>
                            <Link to = '/me'>My Modules</Link>
                        </li>
                    </ul>
                </Nav> 
        </Navbar>
    </header>
}

export default Navigator;