import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router'

const Index = () => {
  const [isToken, setIsToken] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const checkToken = () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');

        if (router.pathname != '/login') {
          setIsToken(true)
        } else {
          setIsToken(false)
        }
      }
    };

    checkToken();
  }, [router]);

  const logOut = () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (token) {
        localStorage.removeItem('token');
        router.push('/login');
      }
    }
  };

  return (
    <header className='h-14 w-full shadow-sm bg-white flex justify-center items-center'>
      <h2 className='font-light'><strong>Gestor</strong> Financeiro</h2>
      {isToken ? (
        <h3 className='absolute right-5 cursor-pointer' onClick={logOut}>Sair</h3>
      ):null}
    </header>
  );
}

export default Index;
