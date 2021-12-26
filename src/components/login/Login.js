import {Alert, Form, Button, Card} from 'react-bootstrap';
import {useRef, useState} from 'react';
import {useAuth} from '../../store/AuthContext';
import {Link, useNavigate} from 'react-router-dom';

function Login() {
    const emailRef = useRef();
    const psswdRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function submissionHandler(event) {
        event.preventDefault();
        
        try {
            setLoading(true);
            await login(emailRef.current.value, psswdRef.current.value);
            navigate('/me');
        } catch {
            return setError('Sign in failed.')
        }
        setLoading(false);
    }

    return <div>
        <Card>
            <Card.Body>
                <h2>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={submissionHandler}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id='psswd'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={psswdRef} required/>
                    </Form.Group>
                    <Button disabled={loading} type='submit'>Login</Button>
                </Form>
            </Card.Body>
        </Card>
        <div>Don't have an account? <Link to='/new'>Sign Up.</Link></div>
    </div>
}

export default Login;