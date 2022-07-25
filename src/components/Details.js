import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Details(props) {
    const {char} = props;
    const [dropDown, setDropDown] = useState("Grab the details Morty, we're doing a StarWars");

    return dropDown;
}