import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const nav = useNavigate();  

    const [fullName, setFullName] = useState(""); 
    const [userEmail, setUserEmail] = useState("");
    const [pwd, setPwd] = useState(""); 

   
    const onSignupSubmit = async (event) => {
        event.preventDefault();  // prevent page reload

      
        const signupPayload = {
            name: fullName,
            email: userEmail,
            password: pwd
        };

        try {
         
            const resp = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupPayload)
            });

            const respData = await resp.json();

            if (resp.ok) {
                alert('Signup successful!');
                nav('/');
            } else {
              
                alert(respData.message || 'Signup failed for some reason.');
            }

        } catch (fetchErr) {
            console.error(fetchErr);  
            alert("Something went wrong while signing up. Try again later.");
        }
    };

  
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-pink-100">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4 drop-shadow">
                    Sign Up
                </h1>
                <p className="text-xs text-center text-gray-500 mb-6">
                    It only takes a minute to join!
                </p>

                <form onSubmit={onSignupSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Jane Doe"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-indigo-400 focus:outline-none transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-indigo-400 focus:outline-none transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            placeholder="Choose a secure password"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-indigo-400 focus:outline-none transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 rounded-full shadow hover:shadow-md transition transform hover:-translate-y-0.5"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-xs text-center text-gray-500 mt-4">
                    Already have an account?{' '}
                    <a href="/" className="text-indigo-600 hover:underline">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
