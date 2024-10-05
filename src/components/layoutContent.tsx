// components/LayoutContent.tsx
'use client';

import React from 'react';

import Footer from "@/partials/footer";
import Menu from "@/partials/menu";
import Header from "@/partials/header";
import { useAuth } from '@/context/authContext';
import ProtectedRoute from './protectedRoute';

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useAuth();

  return (
    <>
      {isLogin ? (
        <div className="flex">
          {/* Menu */}
          <div className="border bg-blue-500 text-white font-bold overflow-y-scroll no-scrollbar h-screen">
            <Menu />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-scroll h-screen">
            <Header />

            <div className="px-5 py-8">
              {children}
            </div>

            <Footer />
          </div>
        </div>
      ) : (
        <>
          {children}
        </>
      )}
    </>
  );
};

export default LayoutContent;
