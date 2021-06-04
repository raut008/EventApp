import React from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadEventRequest, updateEventFavourite } from "../Actions/EventAction";
import { EventCard } from '../Components/EventCard/EventCard';
import Spinner from 'react-bootstrap/Spinner'
import { Row } from 'react-bootstrap';
import { Banner } from '../Components/Banner/Banner';
import SearchBox from '../Components/SearchBox/SearchBox';
import NavBar from '../Components/NavBar/NavBar';

const HomePage = ({ eventState, loadEvents, updateFavourite }) => {

    const [searchField, setSearchField] = React.useState("");

    const FavouriteEvents = eventState.event.filter(item => item.isFavourite);

    React.useEffect(
        () => {
            if (!eventState.loading && !eventState.loaded) {
                loadEvents();
            }
        },
        [eventState]
    );

    React.useEffect(() => {
        localStorage.setItem('fav-list-content', JSON.stringify(FavouriteEvents));
    });

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
                updateFavourite={updateFavourite}
                eventData={item}
            />
        )
    }

    const SearchList = eventState.event.filter(item => {
        return item.name.toLowerCase().includes(searchField.toLowerCase());
    });

    const onSearchChange = e => {
        setSearchField(e.target.value);
    }

    return (
        <div>
            <Banner />
            <NavBar />
            <div className="px-0 m-2">
                <SearchBox onSearchChange={(e) => onSearchChange(e)} />
            </div>
            {eventState.loaded ? <><Row>{renderEvents(SearchList)}</Row></> : <Spinner animation="border" variant="primary" />}
        </div>
    )
}

const mapStateToProps = state => ({
    eventState: state.eventState
});

const mapDispatchToProps = dispatch => ({
    loadEvents: bindActionCreators(loadEventRequest, dispatch),
    updateFavourite: bindActionCreators(updateEventFavourite, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);