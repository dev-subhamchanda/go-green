import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-green-50 min-h-screen">
            {/* Section 1: Hero Section */}
            <section
                className="relative flex flex-col items-center justify-center text-center py-16 px-4 bg-green-100"
                style={{
                    backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-people-planting-tree-illustration_23-2149214943.jpg?t=st=1746432676~exp=1746436276~hmac=7e1f4bcbff2cfd2e48328cf4fa0a4d99b2234c0f7b219658100af45c584ca69c&w=740')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    filter: "brightness(0.7)"
                }}
            >
                <div className="absolute inset-0 bg-green-800 bg-opacity-50 backdrop-blur-sm"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Welcome to Go Green NGO
                    </h1>
                    <p className="text-lg text-white max-w-2xl">
                        Join us in our mission to protect nature and promote sustainable living. Together, we can make a difference for our planet.
                    </p>
                </div>
            </section>

            {/* Section 2: Become a Member */}
            <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">
                    Become a Member
                </h2>
                <p className="text-lg text-green-700 max-w-xl mb-6">
                    Join our community of nature enthusiasts and contribute to our efforts in preserving the environment. Sign up today and be a part of the change!
                </p>
                <button
                    className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
                    onClick={() => {
                        navigate('/member'); // Using navigate to go to /member page
                    }}
                >
                    Join Now
                </button>
            </section>
        </div>
    );
};

export default Home;
