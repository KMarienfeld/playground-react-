import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./Gallery";


function App() {
  return (
    <div className="App">
        <header>
            <h1>All Rick and Morty Characters</h1>
        </header>
        <Gallery/>
    </div>
  );
}

export default App;
