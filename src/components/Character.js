// Write your Character component here
import React from 'react';
import Details from './Details';
import styled from 'styled-components';
import useSound from 'use-sound';
import rmClip from './RMclip.mp3';

const StyledCharacter = styled.div`
summary {
    display: flex;
    font-size: 24px;
    color: white;
    padding: 10px;
    justify-content: center;
}
details {
    display: flex;
    border: solid 2px #00fbc4;
    background-color: rgba(0,0,0,0.75);
    color: white;
}
`

export default function Character(props) {
    const {char} = props

    const sound = rmClip
    const [play, {stop}] = useSound(sound)

    return (
        <StyledCharacter className="charContainer">
            <details>
                <summary onClick={() => play()}>{char.name}</summary>
                <Details 
                    birth_year={char.birth_year} eye_color={char.eye_color} films={char.films} 
                    gender={char.gender} hair_color={char.hair_color} height={char.height} 
                    skin_color={char.skin_color} name={char.name}
                />
            </details>
        </StyledCharacter>
    )
}