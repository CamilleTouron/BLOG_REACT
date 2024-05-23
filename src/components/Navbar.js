import React from 'react';
import {Button} from "reactstrap";

const NavbarComponent = ({setIsLogin}) => {
    const handleDisconnect = () => {
        setIsLogin(false);
    };
    return (
        <div id="navbar" color="light" light expand="md">
            <img src="logo.png" alt="Logo de mesmontagnes.com" className="logo" draggable={false}/>
            <h1>Mes Montagnes</h1>
            {document.cookie.includes('isLogin=true') && <Button id={"disconnect"} color={"success"} onClick={handleDisconnect}>Se déconnecter</Button>}
        </div>
    );
};

export default NavbarComponent;
