import React from 'react';
import {Button} from "reactstrap";
import logo from "../assets/images/logo.png";
import {useNavigate} from "react-router-dom";

const NavbarComponent = ({isLogin, setIsLogin}) => {
    const navigate = useNavigate();

    const handleDisconnect = () => {
        // setIsLogin(false);
        // document.cookie = "isLogin=false";
        navigate("/login");
    };
    return (
        <div id="navbar" color="light" light expand="md">
            <a href={"/"}><img src={logo} alt="Logo de mesmontagnes.com" className="logo" draggable={false}/></a>
            <h1>Mes Montagnes</h1>
            {isLogin &&
            <Button
                id={"disconnect"}
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
            </Button>
            }
        </div>
    );
};

export default NavbarComponent;
