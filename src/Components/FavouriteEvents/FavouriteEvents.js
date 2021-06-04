import React from 'react'
import { EventCard } from '../EventCard/EventCard';
import Spinner from 'react-bootstrap/Spinner'
import { Row } from 'react-bootstrap';

export const FavouriteEvents = () => {

    const [favList, setFavList] = React.useState([])
    React.useEffect(() => {
        const favDataList = localStorage.getItem('fav-list-content');
        if (favDataList) {
            setFavList(JSON.parse(favDataList));
        }
    }, [favList])

    const renderEvents = (events) => {
        return events.map(item =>
            <EventCard
                key={item.id}
                eventId={item.id}
                eventName={item.name}
                eventDate={item.dates.start.localDate}
                eventImages={item.images}
                eventURL={item.url}
                eventVenue={item._embedded.venues[0].name}
                isFavourite={item.isFavourite}
                eventData={item}
            />
        )
    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">FAVOURITE EVENTS[{favList.length}]</h1>
                </div>
            </div>
            {favList ? <><Row>{renderEvents(favList)}</Row></> : <Spinner animation="border" variant="primary" />}
        </div>
    )
}

export default FavouriteEvents;