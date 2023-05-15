import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./Gallery";
import {Route, Routes} from "react-router-dom";
import DetailCard from "./DetailCard";
import axios from "axios";
import Card from "./Card";


function App() {

    return (
    <div className="App">
        <header>
            <h1>All Rick and Morty Characters</h1>
        </header>
        <Gallery/>
       {/* <Routes>
            <Route path={"/"} element={<Gallery/>}/>
            <Route path={"/details/:id"} element={<DetailCard characters={characters}/>}/>
        </Routes>*/}
    </div>
  );
}

export default App;
