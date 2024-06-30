import React from 'react';

const FooterComponent = () => {
    return (
        <div id="footer">
            Développé par Camille Touron &#10084;&#65039; &copy; 2024 mesmontages.com
            <nav className="button-container-bis" aria-label={"Menu secondaire"}>
                <ul>
                    <li><a href={"/mention-legal"} className={"liens-footer"}>Mentions légales</a></li>
                    <li><a href={"/plan-site"} className={"liens-footer"}>Plan de site</a></li>
            </ul>
        </nav>
</div>
    );
};

export default FooterComponent;