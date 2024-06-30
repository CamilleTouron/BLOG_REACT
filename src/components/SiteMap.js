import React from 'react';

const SiteMap = () => {
    return (
        <div>
            <h1>Plan du site</h1>
            <ul>
                <li>
                    <a href="/accueil">Accueil</a>
                    <ul>
                        <li><a href="/details/0">La voie verte des gaves</a></li>
                        <li><a href="/details/1">Le Lac De Castelneau</a></li>
                        <li><a href="/details/2">Le Lac Du Tech</a></li>
                        <li><a href="/details/3">Le Lac Estaing</a></li>
                        <li><a href="/details/4">Le Valon Du Salut</a></li>
                        <li><a href="/details/5">Le lac de Génos-Loudenvielle</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SiteMap;
