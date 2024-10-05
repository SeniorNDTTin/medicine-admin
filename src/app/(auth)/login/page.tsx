'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

function Login() {
  const { setIsLogin } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'ndtt@gmail.com' && password === '123456') {
      setIsLogin(true);
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Đăng nhập</h1>
      <input
        value={username}
        defaultValue="ndtt@gmail.com"
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        className="border p-2 m-2"
      />
      <input
        type="password"
        value={password}
        defaultValue="123456"
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 m-2"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 m-2">
        Login
      </button>
    </div>
  );
};

export default Login;
