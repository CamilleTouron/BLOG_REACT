import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png";
import Cookies from 'js-cookie';
import { Snackbar, Alert } from '@mui/material';

const NavbarComponent = ({ isLogin, setIsLogin }) => {
    const [isDisconnect, setIsDisconnect] = useState(isLogin ? "Se déconnecter" : "Se connecter");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleDisconnect = () => {
        if (isLogin) {
            setIsLogin(false);
            setSnackbarMessage('Vous êtes déconnecté.');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
        } else {
            Cookies.set('redirectAfterLogin', window.location.pathname);
            setTimeout(() => {
                window.location.href = '/connexion';
            });
        }
    }

    useEffect(() => {
        if (Cookies.get('loginSuccess')) {
            setSnackbarMessage('Vous êtes connecté.');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            Cookies.remove('loginSuccess');
        }
    }, []);


    useEffect(() => {
        setIsDisconnect(isLogin ? "Se déconnecter" : "Se connecter");
    }, [isLogin]);

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <div id="navbar">
            <a href={"/"} aria-label={"Accueil"}>
                <img aria-hidden={true} src={logo} alt="Logo de mesmontagnes.com" className="logo" draggable={false} />
            </a>
            <p id={"site-title"}>Mes Montagnes</p>
            <nav className="button-container" aria-label={"Menu principal"}>
                <ul>
                    <li><a id={"navbar-home"} href={"/accueil"}>Accueil</a></li>
                    <li><a id={"navbar-disconnect"} href={"#"} onClick={handleDisconnect}>{isDisconnect}</a></li>
                </ul>
            </nav>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default NavbarComponent;
