import { useState } from 'react'
import { ButtonLogin } from '..'

const Index = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      })

      if (response.ok) {
        // Registro bem-sucedido
        console.log('Usuário registrado com sucesso!')
      } else {
        // Erro no registro
        console.error('Erro ao registrar usuário:', response.statusText)
      }
    } catch (error) {
      console.error('Erro ao registrar usuário:', error)
    }
  }

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='bg-white w-80 md:w-70 flex flex-col gap-4 px-6 py-6 shadow-md'>
        <h2 className='text-center font-light'>Registre-se</h2>
        <div className='flex flex-col justify-center gap-4'>
          <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>
            <div>
              {/* <label htmlFor='name'>Nome completo:</label> */}
              <input
                className='ring-1 rounded px-2 ring-gray'
                type='text'
                id='name'
                value={name}
                placeholder='Nome Completo'
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
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
            <button className='px-6 bg-green text-white font-bold mt-4' type='submit'>Registrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Index
