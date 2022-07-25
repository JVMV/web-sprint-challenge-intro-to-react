// Write your Character component here
import React from 'react';
import Details from './Details';

export default function Character(props) {
    const {char} = props

    return (
        <div className="charContainer">
            <details>
                <summary>{char.name}</summary>
                <Details char={char}/>
            </details>
        </div>
    )
}