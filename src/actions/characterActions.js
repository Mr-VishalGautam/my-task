import axios from "axios";
export const FETCH_CHARACTERS_BEGIN = "FETCH_CHARACTERS_BEGIN";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

export const fetchCharactersBegin = () => ({
  type: FETCH_CHARACTERS_BEGIN,
});

export const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: { characters },
});

export const fetchCharactersFailure = (error) => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: { error },
});
export function fetchCharacters(currentPage) {
  return (dispatch) => {
    dispatch(fetchCharactersBegin());
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/characters?page=${currentPage}&pageSize=4`
      )
      .then((res) => {
        dispatch(fetchCharactersSuccess(res.data));
      })
      .catch((error) => dispatch(fetchCharactersFailure(error)));
  };
}
