import React, { Component } from 'react';
import data from './data.json';

const language_div = data.language.map((item) => {
    return (
        <div class="language-box">
            <div class="lang">
                <p>{item.type}</p>
            </div>
            <div class="level">
                <p>{item.level}</p>
            </div>
        </div>
    )
});

const personal = (props) => {
    return (
        <React.Fragment>
            <div class="language">
                <h2>Language</h2>
                {language_div}
            </div>
        </React.Fragment>
    )
}

export default personal;