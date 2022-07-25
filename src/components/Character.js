// Write your Character component here
import React from 'react';
import Details from './Details';

export default function Character(props) {
    const {char} = props

    return (
        <div className="charContainer">
            <details>
                <summary>{char.name}</summary>
                <Details 
                    birth_year={char.birth_year} eye_color={char.eye_color} films={char.films} 
                    gender={char.gender} hair_color={char.hair_color} height={char.height} 
                    skin_color={char.skin_color} name={char.name}
                />
            </details>
        </div>
    )
}