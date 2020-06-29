import React, { Component } from 'react';
import data from './data.json';

const interessen_div = data.interessen.map((item) => {
    return (
        <div>
            <p>{item}</p>
        </div>
    )
});

const interessen = (props) => {
    return (
        <React.Fragment>
            <div class="interests">
                <h2>Interests</h2>
                {interessen_div}
            </div>
        </React.Fragment>
    )
}

export default interessen;