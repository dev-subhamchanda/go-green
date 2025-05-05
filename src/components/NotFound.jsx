import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 text-center">
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </p>
            <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
                Return to Home
            </button>
        </div>
    );
};

export default NotFound;