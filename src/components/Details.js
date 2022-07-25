import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
    display: flex;
    justify-content: center;
    text-align: left;
    font-size: 20px;

li {
    border: solid 2px rgb(226 138 122);
}
ul {
    list-style: none;
}
`

export default function Details(props) {
    const {birth_year, eye_color, films, gender, hair_color, height, skin_color, name} = props;

    return (
        <StyledDetails className='characterDetails'>
            <ul>
                <li>{`Born: ..........${birth_year}`}</li>
                <li>{`Gender: ......${gender}`}</li>
                <li>{`Height: .......${height}`}</li>
                <li>{`EyeColor: ...${eye_color}`}</li>
                <li>{`HairColor: ...${hair_color}`}</li>
                <li>{`SkinColor: ...${skin_color}`}</li><br />
                <li>Appears in:
                    <ul>
                        {films.map(title => <li>{title}</li>)}
                    </ul>
                </li>
            </ul>
        </StyledDetails>
    )
}