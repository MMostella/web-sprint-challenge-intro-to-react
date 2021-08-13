import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bio from './Character';

import styled from 'styled-components';

const StyledCharacter = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        /* border: 1px solid red; */
        width: 50%;
    }

    button {
        display: flex;
        justify-content: space-between;
        padding: 8px 3%;
        background-color: transparent;
        cursor: pointer;
        margin: 5%;
        border: 5px solid black;
        border-style: outset;
        border-radius: 10px;
        width: 100%;
        font-size: 1.5em;
        font-weight: bold;
        color: ${pr => pr.theme.primaryColor};

        &:hover {
        transform: scale(1.5);
        color: black;
        justify-content: center;
        }
    }

`

export default function Character(props) {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
        .then(res => {
            setCharacters(res.data);
        })
    }, [])     

    return (
        <StyledCharacter >
            <div>
                {characters.map(person => <button key={person.name} >{person.name}</button>)}
            </div>
        </StyledCharacter >
    )
} 