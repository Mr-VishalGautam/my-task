import {
  FETCH_CHARACTERS_BEGIN,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from "../actions/characterActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.characters,
      };

    case FETCH_CHARACTERS_FAILURE:
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
