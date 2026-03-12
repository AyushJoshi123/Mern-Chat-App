import React, { useState } from "react";
import API from "../api/api";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

     const res =  await API.post("/auth/signup",{
 username:name,
 email,
 password
});

      console.log(res.data);

      alert("Signup successful");

      setName("");
      setEmail("");
      setPassword("");

    } catch (err) {

      console.log(err.response?.data || err.message);
      alert("Signup failed");

    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">

      <div className="bg-white w-[400px] p-8 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-md"
          >
            Sign Up
          </button>

        </form>

      </div>

    </div>
  );
}

export default Signup;