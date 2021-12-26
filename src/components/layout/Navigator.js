import {Link} from 'react-router-dom';

function Navigator() {
    return <header>
        <div>
            <h1>Classmate</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to ='/profile'>Profile</Link>
                </li>
                <li>
                    <Link to = '/all'>All Modules</Link>
                </li>
                <li>
                    <Link to = '/me'>My Modules</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Navigator;