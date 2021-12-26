import {Alert, Form, Button, Card} from 'react-bootstrap';
import {useRef, useState} from 'react';
import {useAuth} from '../store/AuthContext'
import {Link} from 'react-router-dom';

function ForgotPassword() {
    const emailRef = useRef();
    const {reset} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function submissionHandler(event) {
        event.preventDefault();
        
        try {
            setMessage('');
            setLoading(true);
            await reset(emailRef.current.value);
            setMessage('Check your email for further instructions.');
        } catch {
            return setError('Password reset failed.')
        }
        setLoading(false);
    }

    return <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Forgot Password</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form onSubmit={submissionHandler}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <Button className='w-100' disabled={loading} type='submit'>Reset Password</Button>
                </Form>
                <div>
                    <Link to='/'>Log in</Link>
                </div>
            </Card.Body>
        </Card>
        <div>Don't have an account? <Link to='/new'>Sign Up.</Link></div>
    </div>
}

export default ForgotPassword;