import React from 'react';
import './GalleryImages.css';

const GalleryImages = () => {
    const images = [
        {
            url: '/Assets/Gallery/IMG_0800.jpeg',
            alt: 'Image 1',
        },
        {
            url: '/Assets/Gallery/IMG_3569.jpeg',
            alt: 'Image 2',
        },
        {
            url: '/Assets/Gallery/IMG_3576.jpeg',
            alt: 'Image 3',
        },
        {
            url: '/Assets/Gallery/IMG_3571.jpeg',
            alt: 'Image 4',
        },
        {
            url: '/Assets/Gallery/IMG_0622.jpeg',
            alt: 'Image 5',
        },
        {
            url: '/Assets/Gallery/IMG_2906.jpeg',
            alt: 'Image 6',
        },
        {
            url: '/Assets/Gallery/IMG_0645.jpeg',
            alt: 'Image 7',
        },
        {
            url: '/Assets/Gallery/IMG_3580.jpeg',
            alt: 'Image 8',
        },
        {
            url: '/Assets/Gallery/IMG_0656.jpeg',
            alt: 'Image 9',
        },
        {
            url: '/Assets/Gallery/IMG_0602.jpeg',
            alt: 'Image 10',
        },
        {
            url: '/Assets/Gallery/IMG_0620.jpeg',
            alt: 'Image 11',
        },
        {
            url: '/Assets/Gallery/IMG_0642.jpeg',
            alt: 'Image 12',
        },
    ];

    return (
        <div className="gallery-container">
            {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img
                        src={image.url}
                        alt={image.alt}
                    />
                </div>
            ))}
        </div>
    );
};

export default GalleryImages;