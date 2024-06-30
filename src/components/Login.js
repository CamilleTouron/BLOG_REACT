import React, {useState, useEffect} from 'react';
import {Button, Container, Form, Input, Label, InputGroup, InputGroupText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet";
import zxcvbn from 'zxcvbn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';

// component Login that takes props setIsLogin
const Login = ({setIsLogin}) => {
    useEffect(() => {
        document.title = 'Login MyMountains';
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
        if (isEmailValid(email) && isPasswordValid(password)) {
            setErrorEmail(false);
            setErrorPassword(false);
            setIsLogin(true);
            Cookies.set('loginSuccess', 'true');
            let redirectPath = Cookies.get('redirectAfterLogin') || '/';
            if (redirectPath === '/connexion') {
                Cookies.remove('redirectAfterLogin');
                redirectPath = '/';
            }
            window.location.href = redirectPath;
        } else {
            setErrorEmail(!isEmailValid(email));
            setErrorPassword(!isPasswordValid(password));
        }
    };

    return (
        <Container className="login-container">
            <Helmet>
                <meta name="connexion-description" content={"Page de connexion."} />
            </Helmet>
            <Form id={"login"} onSubmit={handleSubmit} action={"/accueil"} method={"post"}>
                <h2>Connexion</h2>
                <div className="mb-3">
                    <Label for="email" className="form-label">Email</Label>
                    <Input
                        type="text"
                        name="email input"
                        id="email"
                        placeholder="Entrez votre email"
                        value={email}
                        onChange={handleEmailChange}
                        className={`form-control ${errorEmail ? 'is-invalid' : ''}`}
                        required={true}
                        autoFocus={true}
                        autoComplete={"username"}
                    />
                    {errorEmail ?
                        (<div className="invalid-feedback">Veuillez entrer une adresse email valide.</div>)
                        :
                        (<div></div>)
                    }
                </div>
                <div className="mb-3">
                    <Label for="password" className="form-label">Mot de passe</Label>
                    <InputGroup>
                        <Input
                            type={showPassword ? "text" : "password"}
                            name="password input"
                            id="password"
                            placeholder="Entrez votre mot de passe"
                            value={password}
                            onChange={handlePasswordChange}
                            className={`form-control ${errorPassword ? 'is-invalid' : ''}`}
                            required={true}
                            autoComplete={"current-password"}
                        />
                        <InputGroupText onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </InputGroupText>
                    </InputGroup>
                    {errorPassword ?
                        (<div className="invalid-feedback">Votre mot de passe doit être suffisamment complexe pour assurer la sécurité de votre compte. Essayez quelque chose d'extraordinaire. Champ sensible à la casse.</div>)
                        :
                        (<div></div>)
                    }
                </div>
                <Button type="submit"
                        color={`${(errorPassword || errorEmail) ? 'danger' : 'success'}`}
                        onSubmit={handleSubmit}
                >Connexion</Button>
            </Form>
        </Container>
    );
};

function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isPasswordValid(password) {
    const result = zxcvbn(password);
    return result.score >= 3;
}

export default Login;
