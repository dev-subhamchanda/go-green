import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom' // Import useNavigate

const Login = ({ setLogin }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate() // Initialize navigate hook

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                const result = await response.json()
                console.log(result)
                toast.success('Logged in successfully!')
                setLogin(true)

                // Redirect to the homepage after successful login
                navigate('/') // You can replace '/' with any other route
            } else {
                const errorData = await response.json()
                toast.error(errorData.message || 'Failed to log in. Please try again.')
            }
        } catch (error) {
            console.error('Error:', error)
            toast.error('An error occurred while logging in')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-green-600 mb-4">Go Green</h1>
                <p className="text-center text-gray-600 mb-6">
                    Continue to go-green with{' '}
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/022/100/939/original/instagram-logo-free-png.png"
                        alt="Instagram.com"
                        className="inline-block w-12 h-12"
                    />
                </p>
                <span className="block text-center text-sm text-gray-500 mb-4">
                    Please enter your credentials carefully!
                </span>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            {...register('username', { 
                                required: 'Username is required', 
                                minLength: { value: 4, message: 'Username must be at least 4 characters' } 
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { 
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters' }
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    By signing up, you agree to our{' '}
                    <a href="#" className="text-green-600 hover:underline">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-green-600 hover:underline">
                        Privacy Policy
                    </a>.
                </p>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Verified by{' '}
                    <img
                        src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png"
                        alt="Meta"
                        className="inline-block w-15 h-12"
                    />
                </p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
