import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
    return (
        <section className="bg-white text-black mb-16 overflow-hidden">
            <div className="sponsors-container">
                <div className="sponsor">
                    <img className="sponsor-logo" src="/Assets/Sponsors/Sponsor_1.png" alt="Sponsor Logo 1" />
                </div>
                <div className="sponsor">
                    <img className="sponsor-logo" src="/Assets/Sponsors/Sponsor_2.png" alt="Sponsor Logo 2" />
                </div>
                <div className="sponsor">
                    <img className="sponsor-logo" src="/Assets/Sponsors/Sponsor_3.png" alt="Sponsor Logo 3" />
                </div>
                <div className="sponsor">
                    <img className="sponsor-logo" src="/Assets/Sponsors/Sponsor_4.png" alt="Sponsor Logo 4" />
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
