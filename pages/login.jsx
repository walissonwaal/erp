import React, { useEffect } from 'react'
import Login from '@/src/Layout/Login'
import { useRouter } from 'next/router';

export default function login() {
  const router = useRouter();

  useEffect(() => {
    const checkToken = () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');

        if (token) {
          // O usuário está logado, redireciona para a página de dashboard
          router.push('/dashboard');
        }else {
          router.push('/login');
        }
      }
    };

    checkToken();
  }, [router]);
  
  return (
      <Login />
  )
}
