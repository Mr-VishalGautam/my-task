import React, { useEffect, useState } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { fetchBooks } from "../../actions/bookActions";
import { Link } from "react-router-dom";

export default function BooksList() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const { currentState } = useSelector(
        (state) => ({ currentState: state.books }),
        shallowEqual
    );
    const { items } = currentState;
    useEffect(() => {
        const getInnerPagesWithAxios = async () => {
            await dispatch(fetchBooks(currentPage));
        };
        getInnerPagesWithAxios();
    }, [currentPage, dispatch]);

    return (
        <div>
            <div className="top-route-buttons">
                <Link to="/houses">
                    <button>House Page</button>
                </Link>
                <Link to="/characters">
                    <button>Characters Page</button>
                </Link>
            </div>
            <div className="books-list">
                {items &&
                    items.map((book, index) => {

                        const cleanedDate = new Date(book.released).toDateString();
                        const authors = book.authors.join(", ");
                        return (
                            <div className="book" key={index}>
                                <h4>Book {index + (currentPage - 1) * 4 + 1}</h4>
                                <h2>{book.name}</h2>

                                <div className="details">
                                    <div>
                                        <p>Authors : {authors ? authors : "NA"}</p> *
                                        <p>
                                            Pages : {book.numberOfPages ? book.numberOfPages : "NA"}{" "}
                                        </p>
                                        <p>Country : {book.country ? book.country : "NA"}</p>
                                    </div>
                                    <div>
                                        {" "}
                                        <p>Pages : {book.publisher ? book.publisher : "NA"}</p>
                                        <p>Country : {book.mediaType ? book.mediaType : "NA"}</p>
                                        <p>Released : {cleanedDate ? cleanedDate : "NA"}</p>
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
                    {currentPage < 3 ? <button
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                        }}
                    >
                        Go to page {currentPage + 1}
                    </button> : ""}
                </div>
            </div>
        </div>
    );
}
