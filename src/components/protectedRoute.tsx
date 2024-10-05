'use client';

import React, { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push('/login');
    }
  }, [isLogin, router]);

  if (!isLogin) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default ProtectedRoute;
