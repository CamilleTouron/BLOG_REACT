import React, {useState, useEffect} from 'react';
import {Button, Container, Form, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// component Login that takes props setIsLogin
const Login = ({setIsLogin}) => {
    useEffect(() => {
        document.title = 'Login MyMountains'; // Set the title of the page
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const handleEmailChange = (e) => {
        if (!isEmailValid(e.target.value)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        if (!isPasswordValid(e.target.value)) {
            setErrorPassword(true);
        } else {
            setErrorPassword(false);
        }
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEmailValid(email) || isPasswordValid(password)) {
            setErrorEmail(false);
            setErrorPassword(false);
            setIsLogin(true);
            window.location.reload();
        } else {
            setErrorEmail(isEmailValid(email));
            setErrorPassword(isPasswordValid(password));
        }
    };

    return (
        <Container className="login-container">
            <Form id={"login"} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="mb-3">
                    <Label for="email" className="form-label">Email</Label>
                    <Input
                        type="text"
                        name="email input"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        className={`form-control ${errorEmail ? 'is-invalid' : ''}`}
                        required={true}
                    />
                    {errorEmail ?
                        (<div className="invalid-feedback">Please enter a valid email address.</div>)
                        :
                        (<div></div>)
                    }
                </div>
                <div className="mb-3">
                    <Label for="password" className="form-label">Password</Label>
                    <Input
                        type="password"
                        name="password input"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={`form-control ${errorPassword ? 'is-invalid' : ''}`}
                        required={true}
                    />
                    {errorPassword ?
                        (<div className="invalid-feedback">Please enter a password containing letter, number and special
                            character with a minimum of a length of 8 characters.</div>)
                        :
                        (<div></div>)
                    }
                </div>
                <Button type="submit"
                        color={`${(errorPassword || errorEmail) ? 'danger' : 'success'}`}
                        onSubmit={handleSubmit}
                >Login</Button>
            </Form>
        </Container>
    );
};

function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function isPasswordValid(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

export default Login;