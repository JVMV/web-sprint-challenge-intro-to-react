import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Details(props) {
    const {birth_year, eye_color, films, gender, hair_color, height, skin_color, name} = props;
    const [dropDown, setDropDown] = useState('');

    return (
        <div className='characterDetails'>
            <ul>
                <li>{`Born: ${birth_year}`}</li>
                <li>{`Gender: ${gender}`}</li>
                <li>{`Height: ${height}`}</li>
                <li>{`EyeColor: ${eye_color}`}</li>
                <li>{`HairColor: ${hair_color}`}</li>
                <li>{`SkinColor: ${skin_color}`}</li>
                <li>Appears in:
                    <ul>
                        {films.map(title => <li>{title}</li>)}
                    </ul>
                </li>
            </ul>
        </div>
    )
}