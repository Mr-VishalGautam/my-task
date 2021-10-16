import React, { useEffect, useState } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { fetchHouses } from "../../actions/houseActions";
import { Link } from "react-router-dom";

export default function HousesList() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const { currentState } = useSelector(
        (state) => ({ currentState: state.houses }),
        shallowEqual
    );
    const { items } = currentState;
    useEffect(() => {
        const getInnerPagesWithAxios = async () => {
            await dispatch(fetchHouses(currentPage));
        };
        getInnerPagesWithAxios();
    }, [currentPage, dispatch]);
    return (
        <div>
            <div className="top-route-buttons">
                <Link to="/books">
                    <button>Books Page</button>
                </Link>
                <Link to="/characters">
                    <button>Characters Page</button>
                </Link>
            </div>
            <div className="books-list">
                {items &&
                    items.map((house, index) => {
                        return (
                            <div className="book" key={index}>
                                <h4>House {index + (currentPage - 1) * 4 + 1}</h4>
                                <h2>{house.name}</h2>

                                <div className="details">
                                    <div>
                                        <p>
                                            Coat of Arms :{" "}
                                            {house.coatOfArms ? house.coatOfArms : "NA"}{" "}
                                        </p>
                                        <p>
                                            Current Overlord :
                                            {house.currentLord ? house.currentLord : "NA"}
                                        </p>
                                        <p>Died out :{house.diedOut ? house.diedOut : "NA"}</p>
                                        <p>Founded : {house.founded ? house.founded : "NA"}</p>
                                    </div>
                                    <div>
                                        <p>Founded By : {house.founder ? house.founder : "NA"}</p>
                                        <p>Heir : {house.heir ? house.heir : "NA"}</p>
                                        <p>Overlord : {house.overlord ? house.overlord : "NA"}</p>
                                        <p>Region : {house.region ? house.region : "NA"}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                <div className="pagination">
                    {currentPage > 1 && (
                        <button
                            onClick={() => {
                                setCurrentPage(currentPage - 1);
                            }}
                        >
                            Go to page {currentPage - 1}
                        </button>
                    )}
                    <button
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                        }}
                    >
                        Go to page {currentPage + 1}
                    </button>
                </div>
            </div>
        </div>
    );
}
