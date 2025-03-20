import { Link } from "react-router-dom";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(email, username, password);
  }


  return (
    <div className="h-screen w-full home-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-start p-4 bg-transparent">
        <Link to={"/"}>
          <img src="/movie.png" alt="logo" className="w-30"/>
        </Link>
      </header>

      <div className="flex items-center justify-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="tex-center text-white text-2xl font-bold mb-4">Sign Up</h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-300 block">Email</label>
              <input type="email" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focurs:outline-none:ring" placeholder="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-300 block">Username</label>
              <input type="text" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focurs:outline-none:ring" placeholder="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300 block">Password</label>
              <input type="password" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focurs:outline-none:ring" placeholder="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md transition duration-300 hover:bg-green-900 hover:shadow-lg hover:scale-105">
              Sign Up
            </button>
            <div className='text-center text-gray-300'>
              Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default SignUpPage
