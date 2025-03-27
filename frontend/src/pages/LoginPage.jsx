import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthUserStore } from "../store/authUser";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuthUserStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
    
  };

  return (
    <div className="h-screen w-full home-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-start p-4 bg-transparent">
        <Link to={"/"}>
          <img src="/movie.png" alt="logo" className="w-30"/>
        </Link>
      </header>

      <div className="flex items-center justify-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">Autentificare</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-300 block">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Introduceți email-ul" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300 block">Parolă</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Introduceți parola" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-2 bg-red-600 text-white font-semibold rounded-md transition duration-300 hover:bg-green-900 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Se autentifică..." : "Autentificare"}
            </button>
            <div className='text-center text-gray-300'>
              Nu aveți un cont? <Link to="/signup" className="text-blue-500">Înscrieți-vă!</Link>
            </div>
            <div className='text-center text-gray-300'>
              Ați uitat parola? <Link to="/recover-password" className="text-blue-500">Recuperați-o</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
