import React, { Component } from 'react';
import data from './data.json';

const education_div = data.education.map((item) => {
    return (
        <div class="school">
            <p>{item.name}</p>
            <p>{item.education}/{item.specialization}</p>
        </div>
    )
});

const education = (props) => {
    return (
        <React.Fragment>
            <div class="education">
                <h2>Education</h2>
                {education_div}
            </div>
        </React.Fragment>
    )
}

export default education;