import React, { useState } from 'react'
import { ButtonLogin, RegisterForm } from '@/src/components'

const Index = () => {
  const [form, setForm] = useState(false)
  const [isUser, setIsUser] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        console.log('Usuário logado com sucesso!');
      } else {
        // Erro no login
        console.error('Erro ao fazer login:', response.statusText);
        console.log('Erro ao fazer login!');
      }
      
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  function nextForm () {
    // Fazer verificação do e-mail
    setForm(!form)
  }
  return (
    <>
      {isUser ? (
        <div className='h-full flex flex-col justify-center items-center'>
          <div className='bg-white w-80 md:w-70 flex flex-col gap-4 px-6 py-6 shadow-md'>
            <h2 className='text-center font-light'>Acesse sua conta</h2>
            <div className='flex flex-col justify-center gap-4'>
              <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>
                <div className='py-1 flex gap-2'>
                  {/* <label htmlFor='email'>E-mail:</label> */}
                  <input
                    className='ring-1 rounded px-2 ring-gray'
                    type='text'
                    id='email'
                    value={email}
                    placeholder='E-mail'
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  {/* <label htmlFor='password'>Senha:</label> */}
                  <input
                    className='ring-1 rounded px-2 ring-gray'
                    type='password'
                    id='password'
                    value={password}
                    placeholder='Senha'
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button className='px-6 bg-green text-white font-bold mt-4' type='submit'>Acessar</button>
              </form>
              {/* <input
              className={`${
                !form ? 'block' : 'hidden'
              } border border-zinc-400 px-2 py-1 text-xs`}
              type='email'
              placeholder='E-mail'
            />
            <input
              className={`${
                form ? 'block' : 'hidden'
              } border border-zinc-400 px-2 py-1 text-xs`}
              type='password'
              placeholder='Senha'
            />
            <ButtonLogin onClick={nextForm}>
              {form ? 'Acessar' : 'Próximo'}
            </ButtonLogin> */}
            </div>
          </div>
          <p className='text-start text-xs text-neutral-600 my-4'>
            Ainda não tem conta?{' '}
            <strong>
              <button type='button' onClick={() => setIsUser(!isUser)}>
                Cadastre-se
              </button>
            </strong>
            .
          </p>
        </div>
      ) : (
        <RegisterForm />
      )}
    </>
  )
}

export default Index
