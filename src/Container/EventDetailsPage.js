import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { loadEventRequest } from '../Actions/EventAction';
import Spinner from 'react-bootstrap/Spinner';

export const EventDetailsPage = (props) => {
    const eventId = props.match.params.eventId;
    React.useEffect(
        () => {
            if (!props.eventState.loading && !props.eventState.loaded) {
                props.loadEvents();
            }
        },
        [props.eventState]
    );
    console.log(props.currentEvent);
    return (
        <>
            {props.currentEvent ? <>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">{props.currentEvent.name}</h1>
                        <p className="lead">{props.currentEvent.pleaseNote}</p>
                        <a href={props.currentEvent.seatmap.staticUrl}>SEAT MAP</a>
                    </div>
                </div>

            </> : <Spinner />}
        </>
    )
}

const mapStateToProps = (state, props) => {
    const eventCurrent = state.eventState.event.filter(item => item.id === props.match.params.eventId);
    console.log(eventCurrent);
    return {
        eventState: state.eventState,
        currentEvent: eventCurrent[0],
    }
}

const mapDispatchToProps = dispatch => ({
    loadEvents: bindActionCreators(loadEventRequest, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsPage);
