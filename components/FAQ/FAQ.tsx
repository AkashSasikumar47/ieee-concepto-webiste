import React from 'react';

const FAQ = () => {
    return (
        <section className="bg-white text-black mb-16">
            <div className="w-full px-4 md:px-[84px] py-3 flex flex-col md:flex-row justify-start items-center gap-16">
                <div className="w-full md:w-[573px] p-4 flex flex-col justify-start items-start gap-8">
                    <div className="text-4xl font-extrabold font-['Plus Jakarta Sans'] text-center">Frequently Asked Questions</div>
                    <div className="text-lg font-medium font-['Plus Jakarta Sans'] leading-[33px]">
                        Explore some common questions about CONCEPTO23 below. If you have any other inquiries, feel free to contact us.
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full max-w-[360px] p-4 flex flex-col justify-start items-start gap-4">
                        <div className="text-2xl font-extrabold font-['Plus Jakarta Sans']">How can I register for CONCEPTO23?</div>
                        <div className="text-lg font-medium font-['Plus Jakarta Sans'] leading-[33px]">
                            Registering for CONCEPTO23 is easy! Simply click on the "Register Now" button on our website, fill out the registration form, and you're all set to join us for the event.
                        </div>
                    </div>
                    <div className="w-full max-w-[360px] p-4 flex flex-col justify-start items-start gap-4">
                        <div className="text-2xl font-extrabold font-['Plus Jakarta Sans']">Is there a registration fee for CONCEPTO23?</div>
                        <div className="text-lg font-medium font-['Plus Jakarta Sans'] leading-[33px]">
                            No, registration for CONCEPTO23 is completely free. We believe in making this valuable event accessible to all interested participants.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
