import React, {Component} from 'react';
import data from './data.json';

const skill_list = [
    {
        "name": "python",
        "year": 5,
        "bar": 80,
        "skills": ["Deep Learning", "Algorithm", "Web Scraping", "Django framework"],
    },
    {
        "name": "C/C++",
        "year": 4,
        "bar": 50,
        "skills": ["Algorithm"],
    },
    {
        "name": "Deep Learning",
        "year": 3,
        "bar": 70,
        "skills": ["Image Classification", "Object Detxction", "Optical Character Recognition", "Audio Processing"],
    },
    {
        "name": "Machine Learning",
        "year": 1,
        "bar": 50,
        "skills": ["Visualization", "Preprocessing", "Statistics"]
    },
    {
        "name": "html & css",
        "year": 2,
        "bar": 20,
        "skills": []
    },
    {
        "name": "react",
        "year": 1,
        "bar": 20,
        "skills": []
    }
]

const skill_div = data.skill.map((item) => {
    return (
        <div class="skill">
            <p>{item.name}</p>
            <p>{item.skills}</p>
        </div>
    )
});

const skill = (props) => {
    return (
        <React.Fragment>
            <div>
                {skill_div}
            </div>
        </React.Fragment>
    )
}

export default skill;