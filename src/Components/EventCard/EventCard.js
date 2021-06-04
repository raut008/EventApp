import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const EventCard = ({ updateFavourite, eventId, eventData, eventName, eventDate, eventImages, eventURL, eventVenue, isFavourite }) => {

    const updateEventAsFavourite = (eventData) => {
        updateFavourite(eventData);
    }

    return (
        <Col xs={6} sm={4}>
            <Card style={{ height: "20rem" }}>
                <Card.Body>
                    <div>
                        <a href={`eventDetails/${eventId}`}><Card.Img variant="top" src={eventImages[1].url} /></a>
                    </div>
                    <h6 className="m-0">{eventName}</h6>
                    <Card.Text>Venue : {eventVenue}</Card.Text>
                    <Card.Text className="m-0">{eventDate}</Card.Text>
                </Card.Body>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {!isFavourite ? <Button variant="danger" size="sm" onClick={() => { updateEventAsFavourite(eventData) }}>♥</Button> : <Button variant="warning" onClick={() => { updateEventAsFavourite(eventData) }} size="sm">♡</Button>}
                </div>
            </Card>
        </Col >
    )
}