import React from 'react';
import {Button} from "reactstrap";
import logo from "../assets/images/logo.png";
import {useNavigate} from "react-router-dom";

const NavbarComponent = ({isLogin, setIsLogin}) => {
    const navigate = useNavigate();

    const handleDisconnect = () => {
        navigate("/connexion");
    };

    const handleHome = () => {
        navigate("/accueil");
    };

    return (
        <div id="navbar" color="light" light expand="md">
            <a href={"/"}><img src={logo} alt="Logo de mesmontagnes.com" className="logo" draggable={false}/></a>
            <h1>Mes Montagnes</h1>
            <nav className="button-container">
                <Button
                    id={"navbar-home"} // changed from "home"
                    color={"success"}
                    onClick={handleHome}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            handleHome();
                        }
                    }}
                    tabIndex="0"
                >
                    Accueil
                </Button>
                {isLogin ? (
                    <Button
                        id={"navbar-disconnect"} // changed from "disconnect"
                        color={"success"}
                        onClick={handleDisconnect}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                handleDisconnect();
                            }
                        }}
                        tabIndex="0"
                    >
                        Se déconnecter
                    </Button>) : (<Button
                    id={"navbar-disconnect"} // changed from "disconnect"
                    color={"success"}
                    onClick={handleDisconnect}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            handleDisconnect();
                        }
                    }}
                    tabIndex="0"
                >
                    Se connecter
                </Button>)
                }
            </nav>
        </div>
    );
};

export default NavbarComponent;
