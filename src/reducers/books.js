import {
  FETCH_BOOKS_BEGIN,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from "../actions/bookActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.books,
      };

    case FETCH_BOOKS_FAILURE:
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
