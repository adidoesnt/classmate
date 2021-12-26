import {Card, Button, Alert, Container} from 'react-bootstrap';
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

    return <Container><Card>
            <Card.Body><h2 className='text-center mb-4'>Profile</h2></Card.Body>
            {error && <Alert variant='danger'>{error}</Alert>}
            <strong className='text-center'>Email </strong> 
            <p className='text-center'>{currentUser.email}</p>
        </Card>
        <div><Button className='w-100' variant='link' onClick={logoutHandler}>Log out</Button></div>
    </Container>
}

export default Profile;