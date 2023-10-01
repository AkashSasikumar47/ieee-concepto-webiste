import React from 'react';

const Registration = () => {
    return (
        <section className="bg-white text-black mb-16 relative">
            <img className="w-full h-auto rounded-[40.02px]" src="https://via.placeholder.com/1681x533" alt="Registration Banner" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div className="text-4xl font-extrabold font-['Plus Jakarta Sans'] mb-4">Register Now</div>
                <div className="text-lg font-semibold font-['Plus Jakarta Sans'] mb-8">
                    Ready to join us for CONCEPTO23? Click the "Register Now" button below, and you'll be directed to our registration form on Typeform. Fill out your details, and you're all set!<br /><br />While there are no fees, we encourage you to register as early as possible to secure your spot at this exciting event.
                </div>
                <div className="p-4 bg-slate-400 rounded-[20.01px] shadow inline-block">
                    <div className="text-white text-2xl font-semibold font-['Plus Jakarta Sans']">Register Now</div>
                </div>
            </div>
        </section>
    );
}

export default Registration;
