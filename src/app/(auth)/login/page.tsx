'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { setCookie } from '@/helpers/cookies';

import "./login.css";
import { login } from '@/services/login';

function Login() {
  const { setIsLogin } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState<string>("Admin@gmail.com");
  const [password, setPassword] = useState<string>("123456Aa@");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const result = await login(email, password);
    
    if (true) {
      setIsLogin(true);
      setCookie("token", "tokentestabcxyz", 1);
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
          <Label className="font-bold" htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Input your email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-7">
          <Label className="font-bold" htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Input your password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
