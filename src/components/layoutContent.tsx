'use client';

import React, { useEffect } from 'react';

import Footer from "@/partials/footer";
import Menu from "@/partials/menu";
import Header from "@/partials/header";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import { getCookie } from '@/helpers/cookies';

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { isLogin, setIsLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const token: string = getCookie("token");

    if (token == "tokentestabcxyz") {
      setIsLogin(true);
      router.push("/");
    }
  }, [router, setIsLogin]);

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
