import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import mockCardData from "../assets/mock/CardsProps";
import { Helmet } from 'react-helmet';

const Card = () => {
    const { id } = useParams();
    const card = mockCardData[id];
    const location = useLocation();

    useEffect(() => {
        document.title = mockCardData[id].title + ' - Mes Montagnes';
    }  , []);

    useEffect(() => {
        if (location.hash === "#comments") {
            const commentsSection = document.getElementById("comments");
            if (commentsSection) {
                commentsSection.scrollIntoView({ behavior: "smooth" });
                commentsSection.tabIndex = -1;
            }

        }
    }, [location.hash]);

    return (
        <div id="location-details">
            <Helmet>
                <meta name="description" content={"Page d'affichage des détails d'un lieu de randonnées : description, variations de sentier et commentaires."} />
            </Helmet>
            <h2 tabIndex="0">{card.title}</h2>
            <p tabIndex="0">Difficulté: {card.difficulty}</p>
            <p tabIndex="0">{card.description}</p>
            <table>
                <thead>
                <tr>
                    <th role="columnheader" tabIndex="0" aria-label="Nom du sentier">Nom du sentier</th>
                    <th role="columnheader" tabIndex="0" aria-label="Difficulté">Difficulté</th>
                    <th role="columnheader" tabIndex="0" aria-label="Distance">Distance</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td role="cell" tabIndex="0" aria-label="Sentier du pêcheur">Sentier du pêcheur</td>
                    <td role="cell" tabIndex="0" aria-label="Facile">Facile</td>
                    <td role="cell" tabIndex="0" aria-label="3 kilomètres">3 kilomètres</td>
                </tr>
                <tr>
                    <td role="cell" tabIndex="0" aria-label="Sentier du bucheron">Sentier du bucheron</td>
                    <td role="cell" tabIndex="0" aria-label="Moyen">Moyen</td>
                    <td role="cell" tabIndex="0" aria-label="5 kilomètres">5 kilomètres</td>
                </tr>
                <tr>
                    <td role="cell" tabIndex="0" aria-label="Sentier du fermier">Sentier du fermier</td>
                    <td role="cell" tabIndex="0" aria-label="Difficile">Difficile</td>
                    <td role="cell" tabIndex="0" aria-label="10 kilomètres">10 kilomètres</td>
                </tr>
                <tr>
                    <td role="cell" tabIndex="0" aria-label="Sentier du marchand">Sentier du marchand</td>
                    <td role="cell" tabIndex="0" aria-label="Moyen">Moyen</td>
                    <td role="cell" tabIndex="0" aria-label="7 kilomètres">7 kilomètres</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td role="cell" tabIndex="0" aria-label="Durée maximale : 2 heures">Durée maximale : 2 heures</td>
                    <td role="cell" tabIndex="0" aria-label="Altitude maximale : 300 mètres">Altitude maximale : 300 mètres</td>
                    <td role="cell" tabIndex="0" aria-label="Dénivelé total : 500 mètres">Dénivelé total : 500 mètres</td>
                </tr>
                </tfoot>
            </table>
            <div id="comments">
                <h3 tabIndex="0">Commentaires ({card.comments.length})</h3>
                {card.comments.length > 0 ? (
                    card.comments.map((comment, index) => (
                        <div id="comment" key={index}>
                            <h4 tabIndex="0">{comment.title}</h4>
                            <p tabIndex="0">{comment.content}</p>
                            <small tabIndex="0">{comment.author}</small>
                            <div tabIndex="0" aria-label={new Intl.DateTimeFormat('fr-FR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }).format(new Date(comment.date))}>
                                <small>
                                    {new Intl.DateTimeFormat('fr-FR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    }).format(new Date(comment.date))}
                                </small>
                            </div>
                        </div>
                    ))
                ) : (
                    <p tabIndex="0">No comments yet.</p>
                )}
            </div>
        </div>
    );
};

export default Card;
