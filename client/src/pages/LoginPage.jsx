import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Link } from "react-router-dom";

const LoginPage = () => {
  // Local state for form inputs and loading state
  const [emailInput, setEmailInput] = useState('');  
  const [pwd, setPwd] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Access auth context and navigation hook
  const auth = useContext(AuthContext);  
  const navigate = useNavigate();

  // Handles the login form submission
  const submitLoginForm = async (event) => {
    event.preventDefault();   
    setIsSubmitting(true); // Lock button while processing

    try {
      // Send credentials to backend
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, password: pwd }),
      });

      // If login is successful, store data and redirect
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("userName", emailInput); // Keeping email for quick reference
        auth.login(data); // Call context login method
        navigate("/dashboard");
      } 
      // Handle failed login
      else {
        const errorBody = await response.json();
        throw new Error(errorBody.message || 'Could not log in');
      }

    } catch (err) {
      // Show a user-friendly error message
      alert(err.message || 'Login attempt failed. Try again later.');
    } finally {
      setIsSubmitting(false); // Unlock button
    }
  };

  return (
    // Full-page centered login container
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Welcome Back!
        </h1>

        {/* Login Form */}
        <form onSubmit={submitLoginForm} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg font-semibold shadow transition-colors duration-300"
          >
            {isSubmitting ? 'Logging in…' : 'Login'}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Don't have an account?{' '}
         <Link 
  to="/signup" 
  className="text-cyan-400 font-semibold hover:underline"
>
  Sign up
</Link>


        </p>
      </div>
    </div>
  );
};

export default LoginPage;
