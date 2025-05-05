import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Use this hook instead of useHistory

const Member = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const navigate = useNavigate(); // Use useNavigate for navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.phone) {
            try {
                // POST the form data to your backend API
                const response = await postFormData(formData);

                if (response.success) {
                    // Show success toast
                    toast.success("Form submitted successfully!", {
                        position: "top-center",
                        autoClose: 2000,
                    });

                    // Wait for the toast to finish, then redirect to home
                    setTimeout(() => {
                        navigate("/"); // Redirect to home page using navigate
                    }, 2000);
                } else {
                    toast.error(response.message || "Something went wrong.");
                }
            } catch (error) {
                toast.error("Error submitting form. Please try again later.");
                console.error("Error:", error);
            }
        } else {
            toast.error("Please fill out all fields.");
        }
    };

    // Actual POST request to submit the data to the server
    const postFormData = async (data) => {
        try {
            const response = await fetch("https://go-green-server-1.onrender.com/member-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data), // Send data as JSON
            });

            if (!response.ok) {
                throw new Error("Failed to submit data");
            }

            const result = await response.json();
            return result; // assuming the server responds with { success: true } or { success: false, message: "some error" }
        } catch (error) {
            console.error("Error submitting form data:", error);
            throw error; // Will trigger the catch block and show an error toast
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Member Form
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Member;
