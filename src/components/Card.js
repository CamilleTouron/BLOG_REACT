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
        <section id="location-details">
            <article>
                <Helmet>
                    <meta name="description" content={"Page d'affichage des détails d'un lieu de randonnées : description, variations de sentier et commentaires."} />
                </Helmet>
                <h1>{card.title}</h1>
                <p>Difficulté: {card.difficulty}</p>
                <p>{card.description}</p>
                <table>
                    <caption>
                        {"Détails de " + card.title + " et ses variations de sentier"}
                    </caption>
                    <thead>
                    <tr>
                        <th>Nom du sentier</th>
                        <th>Difficulté</th>
                        <th>Distance</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Sentier du pêcheur</td>
                        <td>Facile</td>
                        <td>3 kilomètres</td>
                    </tr>
                    <tr>
                        <td>Sentier du bucheron</td>
                        <td>Moyen</td>
                        <td>5 kilomètres</td>
                    </tr>
                    <tr>
                        <td>Sentier du fermier</td>
                        <td>Difficile</td>
                        <td>10 kilomètres</td>
                    </tr>
                    <tr>
                        <td>Sentier du marchand</td>
                        <td>Moyen</td>
                        <td>7 kilomètres</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>Durée maximale : 2 heures</td>
                        <td>Altitude maximale : 300 mètres</td>
                        <td>Dénivelé total : 500 mètres</td>
                    </tr>
                    </tfoot>
                </table>
            </article>
            <aside id="comments">
                <h2>Commentaires ({card.comments.length})</h2>
                {card.comments.length > 0 ? (
                    card.comments.map((comment, index) => (
                        <article className="comment" key={index}>
                            <h3>{comment.title}</h3>
                            <p>{comment.content}</p>
                            <small>{comment.author}</small>
                            <div>
                                <small>
                                    {new Intl.DateTimeFormat('fr-FR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    }).format(new Date(comment.date))}
                                </small>
                            </div>
                        </article>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </aside>
        </section>
    );
};

export default Card;
