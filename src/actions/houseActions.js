import axios from "axios";
export const FETCH_HOUSES_BEGIN = "FETCH_HOUSES_BEGIN";
export const FETCH_HOUSES_SUCCESS = "FETCH_HOUSES_SUCCESS";
export const FETCH_HOUSES_FAILURE = "FETCH_HOUSES_FAILURE";

export const fetchHousesBegin = () => ({
  type: FETCH_HOUSES_BEGIN,
});

export const fetchHousesSuccess = (houses) => ({
  type: FETCH_HOUSES_SUCCESS,
  payload: { houses },
});

export const fetchHousesFailure = (error) => ({
  type: FETCH_HOUSES_FAILURE,
  payload: { error },
});
export function fetchHouses(currentPage) {
  return (dispatch) => {
    dispatch(fetchHousesBegin());
    return axios
      .get(
        `https://www.anapioficeandfire.com/api/houses?page=${currentPage}&pageSize=4`
      )
      .then((res) => {
        dispatch(fetchHousesSuccess(res.data));
      })
      .catch((error) => dispatch(fetchHousesFailure(error)));
  };
}
