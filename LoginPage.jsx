import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const LoginPage = () => {
  const [emailInput, setEmailInput] = useState('');  
  const [pwd, setPwd] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const auth = useContext(AuthContext);  
  const navigate = useNavigate();

  const submitLoginForm = async (event) => {
    event.preventDefault();   

    setIsSubmitting(true);

    try {
     
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  
        },
        body: JSON.stringify({ email: emailInput, password: pwd }),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.message || 'Could not log in');
      }

      const userData = await response.json();

   
      auth.login(userData);

      navigate('/dashboard'); 
    } catch (err) {
      alert(err.message || 'Login attempt failed. Try again later.');
    } finally {
      setIsSubmitting(false);  
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
    >
      <div
        className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl w-full max-w-sm"
      >
        <h1 className="text-3xl text-center font-bold text-purple-700 mb-5">
          Welcome Back !!!
        </h1>

        <form onSubmit={submitLoginForm}>
          <div className="mb-4">
        
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
          
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold shadow transition-colors duration-300"
          >
           
            {isSubmitting ? 'Logging in…' : 'Login'}
          </button>
        </form>

      
        <p className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{' '}
          <a
            href="/signup"
            className="text-purple-700 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      
      </div>
    </div>
  );
};

export default LoginPage;
