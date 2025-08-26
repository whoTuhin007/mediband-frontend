"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AuthPage() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            if (isLogin) {
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/login`,
                    {
                        email: formData.email,
                        password: formData.password,
                    },
                    {
                        withCredentials: true,   // 🔥 allow sending/receiving cookies
                    }
                );
                console.log("Login successful:", response.data);
                setUser(response.data.user);
                router.push('/dashboard/medical-form ');


            } else {
                // Register
                if (formData.password !== formData.confirmPassword) {
                    return setError("Passwords do not match");
                }

                try {
                    const response = await axios.post( `${process.env.NEXT_PUBLIC_API_URL}/register`, {
                        fullname: formData.fullname,
                        email: formData.email,
                        password: formData.password,
                    },
                        {
                            withCredentials: true,   // 🔥 allow sending/receiving cookies
                        }
                    );

                    console.log("Registration successful:", response.data);
                    setUser(response.data.user);

                    router.push('/medform');
                }
                catch (err) {
                    console.log(err);
                    setError(err.response?.data?.message || "Registration failed");

                }
            }
        } catch (error) {
            console.error("Error during authentication:", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    {isLogin ? "Login" : "Register"}
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    )}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {!isLogin && (
                        <input
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-500 ml-1 hover:underline"
                    >
                        {isLogin ? "Register" : "Login"}
                    </button>

                </p>
                <div className="text-red-500 text-center mt-4">{error && <p>{error}</p>}
                </div>
            </div>
        </div>
    );
}
