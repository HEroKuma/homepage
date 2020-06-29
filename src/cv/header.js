import React, { Component } from 'react';
import data from './data.json';
import icon from '../image/icon.png';

const box = data.header.map((item) => {
    return (
        <div class="head">
            <div class="head-box">
                <p class="name">{item.name}</p>
                <p class="job">{item.job}</p>
            </div>
            <div class="icon-box">
                <img class="icon" src={icon}/>
            </div>
        </div>
    )
});

const header = () => {
    return (
        <React.Fragment>
            {box}
        </React.Fragment>
    )
}

export default header;