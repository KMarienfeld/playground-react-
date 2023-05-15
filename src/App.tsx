import React from 'react';
import './App.css';
import Gallery from "./Gallery";
import {Route, Routes} from "react-router-dom";
import DetailCard from "./DetailCard";
import useCharacters from "./useCharacters";


function App() {

    const {characters, getAllCharactersFromApi, onClickSetUrlNext, onClickSetUrlPrev, info} = useCharacters()

    return (
    <div className="App">
        <header>
            <h1>All Rick and Morty Characters</h1>
        </header>
        <Routes>
            <Route path={"/"} element={<Gallery characters={characters} info={info} onClickSetUrlNext={onClickSetUrlNext} onClickSetUrlPrev={onClickSetUrlPrev} getAllCharactersFromApi={getAllCharactersFromApi}/>}/>
            <Route path={"/details/:id"} element={<DetailCard characters={characters}/>}/>
        </Routes>
    </div>
  );
}

export default App;
