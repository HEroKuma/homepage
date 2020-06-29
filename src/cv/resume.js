import React, { Component } from 'react';
import Skill from './skill.js';
import Header from './header.js';
import Education from './education.js';
import Interessen from './interessen.js';
import Profile from './profile.js';
import Personal from './personal.js';
import './resume.css'

const resume = () => {
    return (
        <React.Fragment>
            <Header />
            <hr class="solid1" />
            <Skill />
            <hr class="solid2" />
            <div class="row2">
                <Education />
                <Personal />
            </div>
            <hr class="solid2" />
            <Interessen />
            <hr class="solid2" />
            <Profile />
        </React.Fragment>
    )
}

export default resume;