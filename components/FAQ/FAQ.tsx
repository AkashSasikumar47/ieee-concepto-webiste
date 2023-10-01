import React from 'react';

const FAQ = () => {
    return (
        <section className="bg-white py-16 mb-16">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">Frequently Asked Questions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">How can I register for CONCEPTO23?</h3>
                        <p className="text-base md:text-lg">
                            Registering for CONCEPTO23 is easy! Simply click on the "Register Now" button on our website, fill out the registration form, and you're all set to join us for the event.
                        </p>
                    </div>
                    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Is there a registration fee for CONCEPTO23?</h3>
                        <p className="text-base md:text-lg">
                            No, registration for CONCEPTO23 is completely free. We believe in making this valuable event accessible to all interested participants.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
