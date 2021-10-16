import {
  FETCH_HOUSES_BEGIN,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE,
} from "../actions/houseActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function houseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOUSES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_HOUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.houses,
      };

    case FETCH_HOUSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
}
