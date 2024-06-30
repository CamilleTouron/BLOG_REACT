import React from 'react';
import logo from "../assets/images/logo.png";
import Cookies from 'js-cookie';

const NavbarComponent = ({isLogin, setIsLogin}) => {
    const [isDisconnect, setIsDisconnect] = React.useState(isLogin ? "Se déconnecter" : "Se connecter");

    const handleDisconnect = () => {
        if(isLogin) {
            setIsLogin(false);
        } else {
            Cookies.set('redirectAfterLogin', window.location.pathname);
            window.location.href = '/connexion';
        }
    }

    React.useEffect(() => {
        setIsDisconnect(isLogin ? "Se déconnecter" : "Se connecter");
    }, [isLogin]);

    return (
        <div id="navbar">
            <a href={"/"} aria-label={"Accueil"}><img aria-hidden={true} src={logo} alt="Logo de mesmontagnes.com" className="logo" draggable={false}/></a>
            <p id={"site-title"}>Mes Montagnes</p>
            <nav className="button-container" aria-label={"Menu principal"}>
                <ul>
                    <li><a id={"navbar-home"} href={"/accueil"}>Accueil</a></li>
                    <li><a id={"navbar-disconnect"} href={"#"} onClick={handleDisconnect} >{isDisconnect}</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavbarComponent;
