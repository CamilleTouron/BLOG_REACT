import React, { useState, useEffect } from "react";
import { Card, CardBody, CardText, CardImg, CardTitle, CardLink, CardGroup, CardSubtitle } from "reactstrap";
import mockCardData from "../assets/mock/CardsProps";

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
        const handleResize = () => {
            setMaxDescriptionLength(calculateMaxLength());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const groupedCards = groupCards(mockCardData, 2);

    return (
        <div id="home">
            {groupedCards.map((group, groupIndex) => (
                <CardGroup key={groupIndex}>
                    {group.map((card, cardIndex) => (
                        <Card key={cardIndex}>
                        <CardImg alt={card.alt} src={card.image} top tabIndex="0" />
                        <CardBody>
                            <CardTitle tag="h2" tabIndex="0">{card.title}</CardTitle>
                            <CardSubtitle className="text-muted" tabIndex="0">{`${card.comments.length} commentaires`}</CardSubtitle>
                            <CardText tabIndex="0">{truncateDescription(card.description, maxDescriptionLength)}</CardText>
                            <CardLink href={`/card/${cardIndex}`} tabIndex="0">En savoir plus</CardLink>
                            <CardLink href={`/card/${cardIndex}#comments`} tabIndex="0">Voir les commentaires</CardLink>
                        </CardBody>
                    </Card>
                    ))}
                </CardGroup>
            ))}
        </div>
    );
};

export default HomeComponent;
