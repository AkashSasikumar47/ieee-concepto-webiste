import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
    return (
        <section className="bg-white text-black mb-16 overflow-hidden">
            <div className="sponsors-container">
                <div className="sponsor">
                    <img className="sponsor-logo" src="/Assets/IEEE-logos/COMSOC.svg" alt="COMSOC" />
                </div>
                <div className="sponsor">
                    <img className="sponsor-logo" src="/Assets/IEEE-logos/CTS.svg" alt="CTS" />
                </div>
                <div className="sponsor">
                    <img className="sponsor-logo" src="/Assets/IEEE-logos/IAS.svg" alt="IAS" />
                </div>
                <div className="sponsor">
                    <img className="sponsor-logo" src="/Assets/IEEE-logos/PELS.svg" alt="PELS" />
                </div>
                <div className="sponsor">
                    <img className="sponsor-logo" src="/Assets/IEEE-logos/RAS.svg" alt="RAS" />
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
