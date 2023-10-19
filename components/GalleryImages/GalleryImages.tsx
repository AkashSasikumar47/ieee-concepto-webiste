import React from 'react';
import './GalleryImages.css';

const GalleryImages = () => {
    const images = [
        {
            url: '/Assets/Gallery/IMG_0712.png',
            alt: 'Image 1',
        },
        {
            url: '/Assets/Gallery/IMG_3569.png',
            alt: 'Image 2',
        },
        {
            url: '/Assets/Gallery/IMG_3576.png',
            alt: 'Image 3',
        },
        {
            url: '/Assets/Gallery/IMG_0602.png',
            alt: 'Image 4',
        },
        {
            url: '/Assets/Gallery/IMG_0645.png',
            alt: 'Image 5',
        },
        {
            url: '/Assets/Gallery/IMG_0622.png',
            alt: 'Image 6',
        },
        {
            url: '/Assets/Gallery/IMG_0656.png',
            alt: 'Image 7',
        },
        {
            url: '/Assets/Gallery/IMG_0655.png',
            alt: 'Image 8',
        },
        {
            url: '/Assets/Gallery/IMG_3580.png',
            alt: 'Image 9',
        },
        {
            url: '/Assets/Gallery/IMG_0642.png',
            alt: 'Image 10',
        },
        {
            url: '/Assets/Gallery/IMG_3571.png',
            alt: 'Image 11',
        },
        {
            url: '/Assets/Gallery/IMG_0620.png',
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