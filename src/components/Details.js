import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
    border: solid 1px red;
    display: flex;
    text-align: left;
    font-size: 20px;
`

export default function Details(props) {
    const {birth_year, eye_color, films, gender, hair_color, height, skin_color, name} = props;

    return (
        <StyledDetails className='characterDetails'>
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
        </StyledDetails>
    )
}