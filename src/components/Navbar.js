import React from 'react';
import {Button} from "reactstrap";
import logo from "../assets/images/logo.png";
import {useNavigate} from "react-router-dom";

const NavbarComponent = ({isLogin, setIsLogin}) => {
    const navigate = useNavigate();
    const [isDisconnect, setIsDisconnect] = React.useState(isLogin? "Se déconnecter" : "Se connecter");

    const handleDisconnect = () => {
        if(isLogin) {
            setIsLogin(false);
            setIsDisconnect(true);
        }
    }

    React.useEffect(() => {
        setIsDisconnect(isLogin? "Se déconnecter" : "Se connecter");
    }, [isLogin]);

    return (
        <div id="navbar" color="light" light expand="md">
            <a href={"/"}><img src={logo} alt="Logo de mesmontagnes.com" className="logo" draggable={false}/></a>
            <h1>Mes Montagnes</h1>
            <nav className="button-container">
                <ul>
                    <li><a id={"navbar-home"} href={"/accueil"} aria-label={"Lien vers l'accueil"}>Accueil</a></li>
                    <li><a id={"navbar-disconnect"} onClick={handleDisconnect} href={"/connexion"} aria-label={"Lien de déconnexion qui redirige vers la page de connexion"}>{isDisconnect}</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavbarComponent;
