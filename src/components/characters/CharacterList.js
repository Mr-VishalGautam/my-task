import React, { useEffect, useState } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { fetchCharacters } from "../../actions/characterActions";
import { Link } from "react-router-dom";

export default function CharacterList() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const { currentState } = useSelector(
        (state) => ({ currentState: state.characters }),
        shallowEqual
    );
    const { items } = currentState;
    useEffect(() => {
        const getInnerPagesWithAxios = async () => {
            await dispatch(fetchCharacters(currentPage));
        };
        getInnerPagesWithAxios();
    }, [currentPage, dispatch]);
    return (
        <div>
            <div className="top-route-buttons">
                <Link to="/books">
                    <button>Books Page</button>
                </Link>
                <Link to="/houses">
                    <button>House Page</button>
                </Link>
            </div>
            <div className="books-list">
                {items &&
                    items.map((character, index) => {
                        return (
                            <div className="book" key={index}>
                                <h4>Character {index + (currentPage - 1) * 4 + 1}</h4>
                                <h2>{character.name ? character.name : "NA"}</h2>

                                <div className="details">
                                    <div>
                                        <p>
                                            Aliases :{" "}
                                            {character.aliases[0] ? character.aliases[0] : "NA"}{" "}
                                        </p>
                                        <p>
                                            Allegiances :
                                            {character.allegiances ? character.allegiances : "NA"}
                                        </p>
                                        <p>
                                            Books :{character.books[0] ? character.books[0] : "NA"}
                                        </p>
                                        <p>Born : {character.born ? character.born : "NA"}</p>
                                        <p>
                                            Played By :{" "}
                                            {character.playedBy ? character.playedBy : "NA"}
                                        </p>
                                    </div>
                                    <div>
                                        <p>Died : {character.died ? character.died : "NA"}</p>
                                        <p>Father : {character.father ? character.father : "NA"}</p>
                                        <p>Mother : {character.mother ? character.mother : "NA"}</p>
                                        <p>Gender : {character.gender ? character.gender : "NA"}</p>
                                        <p>Spouse : {character.spouse ? character.spouse : "NA"}</p>
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
