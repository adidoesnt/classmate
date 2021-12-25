import {Link} from 'react-router-dom';

function Navigator() {
    return <header>
        <div>
            Navigator
        </div>
        <nav>
            <ul>
                <li>
                    <Link to = '/'>All Modules</Link>
                </li>
                <li>
                    <Link to = '/me'>My Modules</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Navigator;