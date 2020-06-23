import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import icon from '../image/icon.png';
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

const imgsrc = [icon, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const imgjson = {
    "icon": [icon],
    "img": [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
    "img_des": [
        {
            "Name": "img1",
            "src": img1,
            "des": "test_img",
            "size": "L",
            "title": "title",
        },
        {
            "Name": "img2",
            "src": img2,
            "des": "test_img",
            "size": "M",
            "title": "title",
        },
        {
            "Name": "img3",
            "src": img3,
            "des": "test_img",
            "size": "M",
            "title": "title",
        },
        {
            "Name": "img4",
            "src": img4,
            "des": "test_img",
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
    ]
    
}

const images = imgsrc.map(image => {
    return (
        <section class="item">
            <a href="#">
                <img key={image} src={image} classname="image"/>
            </a>
        </section>
    );
});

const img_json = imgjson.img.map(image => {
    return (
        <section class="item">
            <a href="#">
                <img key={image} src={image} classname="image"/>
            </a>
        </section>
    );
});

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
    
    return (
        <section class={"item " + style}>
            <a href="#">
                <img key={data.src} src={data.src} className="image " />
                <div class="category">{data.title}</div>
                <p class="description">{data.des} {data.size}</p>
            </a>
        </section>
    );
});

class BoxRender extends Component {}

const Box = (props) =>{
    return (
        <div class="body">
            <Masonry
                breakpointCols={4}
                className="masonry-gird"
                columnwidth="180"
                columnClassName="masonry-column"
            >
                {img_block}
            </Masonry>
        </div>
    );
}

export default Box;