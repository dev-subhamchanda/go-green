import React from 'react';

const AboutDev = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About the Developer</h1>
            <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-4xl">
                <div className="mb-6 md:mb-0 md:mr-8">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Developer" 
                        className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
                    />
                </div>
                <div className="text-center md:text-left">
                    <p className="text-gray-700 text-lg mb-4">
                        Hi! I'm <span className="font-semibold">[Your Name]</span>, a passionate developer with a love for creating
                        innovative and user-friendly applications. I specialize in <span className="font-semibold">[Your Skills/Technologies]</span>,
                        and I'm always eager to learn and grow in the ever-evolving tech world.
                    </p>
                    <p className="text-gray-700 text-lg">
                        When I'm not coding, I enjoy <span className="font-semibold">[Playing Cricket and Listening to Music]</span>. Feel free to connect with me
                        on <span className="font-semibold">[Instagram : @subham_chanda__]</span>!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutDev;
