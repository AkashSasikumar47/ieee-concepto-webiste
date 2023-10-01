import React from 'react';

const Sponsors = () => {
    return (
        <section className="bg-white text-black mb-16">
            <div className="w-full md:w-[1920px] h-auto p-4 md:p-3 flex flex-col md:flex-row justify-between items-center gap-8">
                <img className="w-full md:w-[305px] h-auto opacity-30" src="/Assets/Sponsors/Sponsor_1.png" alt="Sponsor Logo 1" />
                <img className="w-full md:w-[114px] h-auto opacity-30 mt-4 md:mt-0" src="/Assets/Sponsors/Sponsor_2.png" alt="Sponsor Logo 2" />
                <img className="w-full md:w-[265px] h-auto opacity-30 mt-4 md:mt-0" src="/Assets/Sponsors/Sponsor_3.png" alt="Sponsor Logo 3" />
                <img className="w-full md:w-80 h-auto opacity-30 mt-4 md:mt-0" src="/Assets/Sponsors/Sponsor_4.png" alt="Sponsor Logo 4" />
            </div>
        </section>
    );
}

export default Sponsors;
