import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';
// import Details from './Details';
import Character from './components/Character';

// import styled from 'styled-components';

export default function App(props) {
  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState(null);

  const openDetails = id => {
    setInfo(id);
  }

  const closeDetails = () => {
    setInfo(null);
  }

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
    </div>
  );
}
