import React from 'react';
import './MovingImages.css';

const images = [
    '../../../../public/ImgLayout/409090199_893417295913873_6431943884138392477_n.jpg',
    '../../../../public/ImgLayout/409103605_894058042516465_3086056766359029981_n.jpg',
    '../../../../public/ImgLayout/426383391_884813896774213_8697089442123622479_n.jpg',
    '../../../../public/ImgLayout/426400078_887276146527988_6685702721640920374_n.jpg',
    '../../../../public/ImgLayout/429510733_893417185913884_8989106216206896317_n.jpg',
    '../../../../public/ImgLayout/438299173_935010291754573_2235743285604805511_n.jpg',
    '../../../../public/ImgLayout/445221277_947692500486352_1983040342489269207_n.jpg',
];

function MovingImages() {
    return (
        <div className='ImagesBackground'>
            <div className='ImagesContainer'>
                {images.concat(images).map((src, index) => (
                    <img key={index} src={src} alt={`Moving ${index}`} className='MovingImages' />
                ))}
            </div>
        </div>
    );
}

export default MovingImages;