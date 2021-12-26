import {Form, Button, Card} from 'react-bootstrap';
import {useRef} from 'react';

function Signup() {
    const emailRef = useRef();
    const psswdRef = useRef();
    const psswdCfmRef = useRef();
    return <div>
        <Card>
            <Card.Body>
                <h2>Sign Up</h2>
                <Form>
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
                    <Button type='submit'>Sign up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div>Already have an account? Log in</div>
    </div>
}

export default Signup;