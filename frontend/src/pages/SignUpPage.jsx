import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthUserStore } from "../store/authUser";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { signup } = useAuthUserStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    signup({ email, username, password });
  };

  return (
    <div className="h-screen w-full home-bg flex flex-col">
      <header className="max-w-6xl mx-auto flex items-center justify-start p-4 bg-transparent">
        <Link to={"/"}>
          <img src="/movie.png" alt="logo" className="w-30" />
        </Link>
      </header>

      <div className="flex flex-1 items-center justify-center px-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">Sign Up</h1>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-300 block">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-300 block">Username</label>
              <input type="text" id="username" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300 block">Password</label>
              <input type="password" id="password" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" disabled={loading} className={`w-full py-2 font-semibold rounded-md transition duration-300 hover:shadow-lg hover:scale-105 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-red-600 hover:bg-green-900 text-white"}`}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="text-center text-gray-300">
              Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
