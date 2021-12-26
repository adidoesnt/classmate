import {Card, Button, Alert} from 'react-bootstrap';
import {useState} from 'react';
import {useAuth} from '../store/AuthContext'
import {useNavigate} from 'react-router-dom';

function Profile() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();
    
    async function logoutHandler() {
        setError('');
        try {
            await logout();
            navigate('/');
        } catch {
            setError('Log out failed.');
        }
    }

    return <div><Card>
            <Card.Body>Profile</Card.Body>
            {error && <Alert variant='danger'>{error}</Alert>}
            <strong>Email: </strong> {currentUser.email}
        </Card>
        <div><Button variant='link' onClick={logoutHandler}>Log out</Button></div>
    </div>
}

export default Profile;