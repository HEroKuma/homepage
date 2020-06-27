import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import Navi from './navbar.js';
import Icon from '../image/icon.png';
import img1 from '../image/image_L_1.jpg';
import img2 from '../image/image_M_1.jpg';
import img3 from '../image/image_M_2.jpg';
import img4 from '../image/image_M_3.jpg';
import img5 from '../image/image_M_4.jpg';
import img6 from '../image/image_S_1.jpg';
import img7 from '../image/image_S_2.jpg';
import img8 from '../image/image_S_3.jpg';
import img9 from '../image/image_S_4.jpg';
import img10 from '../image/image_S_5.jpg';
import img11 from '../image/image_S_6.jpg';
import img12 from '../image/image_S_7.jpg';
import img13 from '../image/image_S_8.jpg';
import img14 from '../image/image_S_9.jpg';
import img15 from '../image/image_S_10.jpg';

const imgjson = {
    "img_des": [
        {
            "Name": "img1",
            "src": img1,
            "des": "It was always dangerous to drive with him since he insisted the safety cones were a slalom course.",
            "size": "L",
            "title": "title",
        },
        {
            "Name": "img2",
            "src": img2,
            "des": "Someone I know recently combined Maple Syrup & buttered Popcorn thinking it would taste like caramel popcorn. It didn’t and they don’t recommend anyone else do it either.",
            "size": "M",
            "title": "title",
        },
        {
            "Name": "img3",
            "src": img3,
            "des": "We need to rent a room for our party.",
            "size": "M",
            "title": "title",
        },
        {
            "Name": "img4",
            "src": img4,
            "des": "For the 216th time, he said he would quit drinking soda after this last Coke.",
            "size": "M",
            "title": "title",
        },
        {
            "Name": "img5",
            "src": img5,
            "des": "test_img",
            "size": "M",
            "title": "title",
        },
        {
            "Name": "img6",
            "src": img6,
            "des": "test_img",
            "size": "S",
            "title": "title",
        },
        {
            "Name": "img7",
            "src": img7,
            "des": "test_img",
            "size": "S",
            "title": "title",
        },
        {
            "Name": "img8",
            "src": img8,
            "des": "test_img",
            "size": "S",
            "title": "title",
        },
        {
            "Name": "img9",
            "src": img9,
            "des": "test_img",
            "size": "S",
            "title": "title",
        },
        {
            "Name": "img10",
            "src": img10,
            "des": "test_img",
            "size": "S",
            "title": "title",
        },
        {
            "Name": "img11",
            "src": img11,
            "des": "test_img",
            "size": "S",
            "title": "title",
        },
        {
            "Name": "img12",
            "src": img12,
            "des": "test_img",
            "size": "S",
            "title": "title",
        },
        {
            "Name": "img13",
            "src": img13,
            "des": "test_img",
            "size": "S",
            "title": "title",
        },
        {
            "Name": "img14",
            "src": img14,
            "des": "test_img",
            "size": "S",
            "title": "title",
        },
        {
            "Name": "img15",
            "src": img15,
            "des": "test_img",
            "size": "S",
            "title": "title",
        },
    ]
    
}

const img_block = imgjson.img_des.map((data, i) => {
    var style = "item-maindish"
    switch(i%4){
        case 0:
            style = "item-maindish"
            break;
        case 1:
            style = "item-appetizer"
            break;
        case 2:
            style = "item-column"
            break;
        case 3:
            style = "item-breaktime"
            break;
    }
    style +=  (" item-" + data.size)
    
    return (
        <section class={"item " + style}>
            <a href="Name">
                <div class="img-hover-zoom">
                    <img key={data.src} src={data.src} className="image " />
                </div>
                <div class="category">{data.title}</div>
                <p class="description">{data.des} {data.size}</p>
            </a>
        </section>
    );
});

const Box = (props) =>{
    const masonryOptions = {
        transitionDuration: 0,
        columnWidth: 1,
    };
    return (
        <React.Fragment>
            <Navi />
            <Masonry
                className={'img-set'}
                elementType={'section'}
                options={masonryOptions}
            >  
                    {img_block}
            </Masonry>
        </React.Fragment>
    );
}

export default Box;