import Login from '@/src/Layout/Login'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function Home() {
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

  return null; // Retorna null para não renderizar nada na página raiz
}
