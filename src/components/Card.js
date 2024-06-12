import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import mockCardData from "../assets/mock/CardsProps";

const Card = () => {
    const { id } = useParams();
    const card = mockCardData[id];
    const location = useLocation();

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
            <img src={card.image} alt={card.alt} tabIndex="0" />
            <h2 tabIndex="0" >{card.title}</h2>
            <p tabIndex="0"  >Difficulté: {card.difficulty}</p>
            <p tabIndex="0"  >{card.description}</p>
            <div id="comments">
                <h3 tabIndex="0" >Commentaires ({card.comments.length})</h3>
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
                    <p tabIndex="0" >No comments yet.</p>
                )}
            </div>
        </div>
    );
};

export default Card;
