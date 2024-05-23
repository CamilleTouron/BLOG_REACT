import React from 'react';

const NavbarComponent = () => {
    return (
        <div id="navbar" color="light" light expand="md">
                <img src="logo.png" alt="Logo of MyMountains.com" className="logo" draggable={false}/>
                <h1>MyMountains</h1>
        </div>
    );
};

export default NavbarComponent;
