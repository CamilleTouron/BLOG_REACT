import React from 'react';
import {
    Navbar,
    Container
} from 'reactstrap';

const NavbarComponent = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <img src="logo.png" alt="Logo of MyMountains.com" className="logo" draggable={false}/>
                <h1>MyMountains</h1>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
