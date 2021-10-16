import axios from "axios";
export const FETCH_BOOKS_BEGIN = "FETCH_BOOKS_BEGIN";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export const fetchBooksBegin = () => ({
  type: FETCH_BOOKS_BEGIN,
});

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: { books },
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: { error },
});
export function fetchBooks(currentPage) {
  return (dispatch) => {
    dispatch(fetchBooksBegin());
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/books?page=${currentPage}&pageSize=4`
      )
      .then((res) => {
        dispatch(fetchBooksSuccess(res.data));
      })
      .catch((error) => dispatch(fetchBooksFailure(error)));
  };
}
