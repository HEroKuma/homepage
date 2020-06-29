import React, { Component } from 'react';
import data from './data.json';
import github_icon from '../image/github.png';
import mail_icon from '../image/mail.png';

const profile_div = data.profile.map((item) => {
    return (
        <div>
            <div class="mail">
                <img class="mail-icon" src={mail_icon} />
                <p>{item.mail}</p>
            </div>
            <div class="git">
                <img class="github-icon" src={github_icon} />
                <p>{item.github}</p>
            </div>
        </div>
    )
});

const profile = (props) => {
    return (
        <React.Fragment>
            <div class="profile">
                <h2>Profile</h2>
                {profile_div}
            </div>
        </React.Fragment>
    )
}

export default profile;