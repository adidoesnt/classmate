import {Alert, Form, Button, Card, Container} from 'react-bootstrap';
import {useRef, useState} from 'react';
import {useAuth} from '../../store/AuthContext';
import {Link, useNavigate} from 'react-router-dom';

function Signup() {
    const emailRef = useRef();
    const psswdRef = useRef();
    const psswdCfmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function submissionHandler(event) {
        event.preventDefault();
        if(psswdRef.current.value !== psswdCfmRef.current.value){
            return setError('Passwords entered do not match.');
        }
        try {
            setLoading(true);
            await signup(emailRef.current.value, psswdRef.current.value);
            navigate('/');
        } catch {
            return setError('Sign up failed.')
        }
        setLoading(false);
    }

    return <Container className='d-flex align-items-center justify-content-center'
        style={{minHeight: '50vh'}}>
        <div className='w-100' style ={{maxWidth: '400px'}}>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
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
                        <Form.Group id='psswdCfm'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={psswdCfmRef} required/>
                        </Form.Group>
                        <Button className='w-100' disabled={loading} type='submit'>Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div>Already have an account? <Link to='/'>Log in.</Link></div>
        </div>
    </Container>
}

export default Signup;