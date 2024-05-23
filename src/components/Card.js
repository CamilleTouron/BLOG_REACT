import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import mockCardData from "../assets/mock/CardsProps";

const Card = () => {
    const { id } = useParams();
    const card = mockCardData[id];
    const location = useLocation();

    useEffect(() => {
        // Vérifier si l'URL contient "#comments"
        if (location.hash === "#comments") {
            // Récupérer l'élément DOM de la section des commentaires
            const commentsSection = document.getElementById("comments");
            if (commentsSection) {
                // Faire défiler la page jusqu'à la section des commentaires
                commentsSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location.hash]); // Exécuter lorsque le hash dans l'URL change

    return (
        <div id="location-details">
            <img src={card.image} alt={card.alt} />
            <h2>{card.title}</h2>
            <p>Difficulté: {card.difficulty}</p>
            <p>{card.description}</p>
            <div id="comments">
                <h3>Commentaires ({card.comments.length})</h3>
                {card.comments.length > 0 ? (
                    card.comments.map((comment, index) => (
                        <div id="comment" key={index}>
                            <h4>{comment.title}</h4>
                            <p>{comment.content}</p>
                            <small>{comment.author}</small>
                            <div>
                                <small>
                                    {new Date(comment.date).toLocaleDateString().toString()}
                                </small>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
};

export default Card;
