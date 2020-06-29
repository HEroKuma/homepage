import React, { Component } from 'react';
import data from './data.json';

const box = data.header.map((item) => {
    return (
        <div class="head">
            <p class="name">{item.name}</p>
            <p class="job">{item.job}</p>
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