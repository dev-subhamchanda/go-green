import React from 'react';

const AboutDev = ({ name = "Subham Chanda", specialty = "Full Stack Development", hobbies = "Playing Cricket and Listening to Music", instagram = "@subham_chanda__" }) => {
    return (
        <div className="flex flex-col items-center bg-gray-100 py-10 px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About the Developer</h1>
            <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-4xl">
                <div className="mb-6 md:mb-0 md:mr-8">
                    <img 
                        src="data:image/jpeg;base64,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"
                        alt="Developer's profile picture" 
                        className="rounded-full w-48 h-48 object-cover mb-4 md:mb-0"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
                    <p className="text-lg text-gray-700 mb-4">{specialty}</p>
                    <p className="text-gray-600 mb-4">{hobbies}</p>
                    <p className="text-gray-600">Instagram: <a href={`https://www.instagram.com/${instagram}`} className="text-blue-500 hover:underline">{instagram}</a></p>
                </div>
            </div>
        </div>
    );
};

export default AboutDev;
