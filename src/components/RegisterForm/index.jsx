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
      <div className='bg-white w-80 md:w-96 flex flex-col gap-4 px-6 py-6 shadow-md'>
        <h2 className='text-start font-light'>Cadastre-se</h2>
        <div className='flex flex-col justify-center gap-4'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Nome completo:</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='email'>E-mail:</label>
              <input
                type='text'
                id='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='password'>Senha:</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <ButtonLogin type='submit'>Registrar</ButtonLogin>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Index
