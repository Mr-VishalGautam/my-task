import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import HousesList from "./houses/HousesList";
import BooksList from "./books/BooksList";
import CharacterList from "./characters/CharacterList";
import Header from "./Header";

export default function Routes() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/books" component={BooksList} />
                <Route path="/houses" component={HousesList} />
                <Route path="/characters" component={CharacterList} />
                <Redirect from="/" to="/books" />
            </Switch>
        </div>
    );
}
