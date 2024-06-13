import React, { useState, useEffect } from "react";
import { Card, CardBody, CardText, CardImg, CardTitle, CardLink, CardGroup, CardSubtitle } from "reactstrap";
import mockCardData from "../assets/mock/CardsProps";
import {Helmet} from "react-helmet";

const groupCards = (cards, groupSize) => {
    return cards.reduce((result, card, index) => {
        if (index % groupSize === 0) {
            result.push([]);
        }
        result[result.length - 1].push(card);
        return result;
    }, []);
};

const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
        return description.substring(0, maxLength) + "...";
    }
    return description;
};

const calculateMaxLength = () => {
    const width = window.innerWidth;
    if (width < 250) return 25;
    if (width < 300) return 50;
    if (width < 768) return 100;
    if (width < 1000) return 130;
    return 245;
};

const HomeComponent = () => {
    const [maxDescriptionLength, setMaxDescriptionLength] = useState(calculateMaxLength());

    useEffect(() => {
        document.title = 'Accueil - Mes Montagnes';

        const handleResize = () => {
            setMaxDescriptionLength(calculateMaxLength());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const groupedCards = groupCards(mockCardData, 2);

    return (
        <div id="home">
            <Helmet>
                <meta name="description"
                      content={"Page d'affichage de la liste des randonnées affichées sous forme de cartes."}/>
            </Helmet>
            <h1 id={"bienvenu"}>Bienvenu, vous retrouverez sur ce site des lieux de randonnées avec l'avis de randonneurs passionnées.</h1>
            {groupedCards.map((group, groupIndex) => (
                <CardGroup key={groupIndex} tag={"section"}>
                    {group.map((card, cardIndex) => (
                        <Card key={cardIndex} tag={"article"}>
                            <CardImg alt={card.alt} src={card.image} aria-label={"Image de "+card.title} top/>
                            <CardBody>
                                <CardTitle tag="h2">{card.title}</CardTitle>
                                <CardSubtitle className="text-muted">{`${card.comments.length} commentaires`}</CardSubtitle>
                                <CardText>{truncateDescription(card.description, maxDescriptionLength)}</CardText>
                                <CardLink href={`/details/${cardIndex}`} aria-label={"Lien pour accèder aux details de "+card.title}>En savoir plus</CardLink>
                                <CardLink href={`/details/${cardIndex}#comments`} aria-label={"Lien pour accèder aux commentaires de "+card.title}>Voir les commentaires</CardLink>
                            </CardBody>
                        </Card>
                    ))}
                </CardGroup>
            ))}
        </div>
    );
};

export default HomeComponent;
