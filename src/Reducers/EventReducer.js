import { loadEventRequest, loadEventSuccess, loadEventFailure, updateEventFavourite, loadSingleEventRequest } from "../Actions/EventAction";
import { handleActions } from "redux-actions";

const initialState = {
    loading: false,
    loaded: false,
    error: false,
    event: [],
}

export default handleActions(
    {
        [loadEventRequest](state, action) {
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false,
            }
        },
        [loadEventSuccess](state, action) {
            const events = action.payload.map(item => ({ ...item, isFavourite: false }));
            return {
                ...state,
                loading: true,
                loaded: true,
                error: false,
                event: events,
            }
        },
        [loadEventFailure](state, action) {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: true,
                event: []
            }
        },
        [updateEventFavourite](state, action) {
            const eventFavourite = action.payload;
            return {
                ...state,
                event: state.event.map(item => item.id === eventFavourite.id ? { ...item, isFavourite: !item.isFavourite } : item),
            }
        },
        [loadSingleEventRequest](state, action) {
            return {
                ...state,
            }
        }
    },
    initialState
);