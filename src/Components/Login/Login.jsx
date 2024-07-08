import React, { useState } from "react";

const Login = ({ isOpen, setShowLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Handle the login or sign-up logic here
    if (isLogin) {
      console.log("Login - Username:", username, "Password:", password);
    } else {
      console.log(
        "Sign Up - Username:",
        username,
        "Password:",
        password,
        "Email:",
        email
      );
    }
    setShowLogin(false);
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 relative">
          <h2 className="text-2xl mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            )}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={switchForm}
                className="text-[#0F513A] underline  hover:text-green-600"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setShowLogin(false);
                  }}
                  className="bg-gray-500 hover:bg-gray-400 text-white p-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0F513A] text-white p-2 rounded hover:bg-green-700"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Login;
