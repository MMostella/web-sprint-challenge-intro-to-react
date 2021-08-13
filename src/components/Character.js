import React from 'react';

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
    return (
        <StyledCharacter >
            <div>
                <button>{props.info.name}</button>
            </div>
        </StyledCharacter >
    )
}