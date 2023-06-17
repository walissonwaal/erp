import React, { useEffect, useState }  from 'react'
import jwt from 'jsonwebtoken';
import { PrivateRoute } from '@/src/components'

export default function () {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      const decodedToken = jwt.decode(token);
      if (decodedToken) {
        setUserName(decodedToken.nameUser);
      }
    }
  }, []);
      
  return (
    <PrivateRoute>
      <div className='bg-erpWhite m-4 px-4 py-2'>
        <h3>Bem vindo(a), {userName} 😀.</h3>
        <h1>Dashboard</h1>
      </div>
    </PrivateRoute>
  )
}
