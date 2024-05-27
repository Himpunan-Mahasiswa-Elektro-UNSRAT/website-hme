"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";


export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Email and password are required.");
    } else {
      try {
        // Simulate API call
        await fakeApiCall(username, password);
        setUsername("");
        setPassword("");
        setError(null);
        alert("Login successful!");
      } catch (error) {
        setError("Invalid email or password.");
      }
    }
  };

  // Simulated API call
  const fakeApiCall = (username: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "password") {
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
{/* Left side: Login form */}
<div className="flex items-center w-full lg:w-4/19 p-8 lg:p-28 bg-white relative">
  <div className="absolute top-0 left-0 m-4 lg:m-8 w-32">
    <img src="/logo-hme-fix.png" alt="Logo" className="w-full"/>
    </div>
 <div className="w-full max-w-md p-10 bg-white shadow-md rounded-lg mx-auto">
  <h2 className="text-4xl font-bold text-center text-blue-900 mb-5">Login</h2>
  <p className="text-2x4 text-center text-gray-800 mb-5">Selamat datang kembali, Elek-Elik!</p>
  <form onSubmit={handleSubmit} className="space-y-5">
    <div>
    <label htmlFor="username" className="block text-black text-sm font-bold py-2">
        Email
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
      <label htmlFor="password" className="block text-black text-sm font-bold py-2">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    {error && <p className="text-red-500 text-xs italic">{error}</p>}
    <div className="text-1xl flex items-center justify-center">
      <button className="bg-blue-900 text-white font-bold py-4 px-10 rounded-full focus:outline-none border border-white hover:bg-gray-200" type="submit">
        Login
      </button>
    </div>
    <div className="text-center mt-4">
      <Link href="/forgot-password" legacyBehavior>
        <a className="text-blue-800 hover:text-blue-700 text-sm">Lupa Password?</a>
      </Link>
    </div>
  </form>
  </div>
</div>
    {/* Right side: Registration prompt */}
<div className="flex flex-col items-center justify-center w-full lg:w-1/3 bg-blue-900 text-white">
  <div className="text-center p-12">
    <h2 className="text-4xl font-bold mb-4">Halo, Elek-Elik!</h2>
    <p className="mb-6">Buat akun dan akses semua dalam website Himpunan Mahasiswa Elektro</p>
    <Link href="/register" legacyBehavior>
      <a className="inline-block bg-blue-900 text-white font-bold py-4 px-10 rounded-full border border-white hover:bg-gray-200">
        REGISTER
      </a>
          </Link>
        </div>
      </div>
    </main>
  );
}