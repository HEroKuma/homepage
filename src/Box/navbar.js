import React, { Component } from 'react';
import Icon from '../image/icon.png';

const navi_list = [
    {
        "name": "HOME",
        "src": "#",
    },
    {
        "name": "ABOUT",
        "src": "#",
    },
    {
        "name": "MAIN",
        "src": "#",
    },
    {
        "name": "COLUMN",
        "src": "#",
    },
    {
        "name": "OTHER",
        "src": "#",
    },
]

const navi_item = navi_list.map((item) => {
    return (
        <li class="nav-item"><a href={item.src}>{item.name}</a></li>
    )
});

const navi_bar = (prop) => {
    return (
        <header class="header item">
            <h1>
                <a href="#">
                    <img class="logo" src={Icon}/>
                </a>
            </h1>
            <nav class="nav">
                <ul>
                    {navi_item}
                </ul>
            </nav>
        </header>
    );
}

export default navi_bar;