import { createAction } from "redux-actions";

export const loadEventRequest = createAction("LOAD_EVENT_REQUEST");
export const loadEventSuccess = createAction("LOAD_EVENT_SUCCESS");
export const loadEventFailure = createAction("LOAD_EVENT_FAILURE");

export const loadSingleEventRequest = createAction("LOAD_SINGLE_EVENT_REQUEST");
export const loadSingleEventSuccess = createAction("LOAD_SINGLE_EVENT_SUCCESS");
export const loadSingleEventFailure = createAction("LOAD_SINGLE_EVENT_FAILURE");

export const updateEventFavourite = createAction("UPDATE_EVENT_FAVOURITE");