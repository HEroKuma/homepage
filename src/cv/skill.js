import React, { Component } from 'react';
import data from './data.json';
import arrow from '../image/arrow-right.png';

const skill_div = data.skill.map((item) => {
    let bar = item.bar + "%";
    return (
        <div class="skill_box">
            <p class="skill_name"><span class="arrow">{item.name}</span>{item.year} year(s)</p>
            <div class="skill-bar" id={item.name}></div>
            <p>{item.skills}</p>
        </div>
    )
});

const skill = (props) => {
    return (
        <React.Fragment>
            <div class="skill">
                <h2>Skills</h2>
                <div class="skill_list">
                    {skill_div}
                </div>
            </div>
        </React.Fragment>
    )
}

export default skill;