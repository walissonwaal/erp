import React, {useState} from 'react'
import { ButtonLogin } from '@/src/components'

const Index = () => {
  const [form, setForm] = useState(false);

  function nextForm(){
    // Fazer verificação do e-mail
    setForm(!form)
  }
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='bg-white w-80 md:w-96 flex flex-col gap-4 px-6 py-6 shadow-md'>
        <h2 className='text-start font-light'>Acesse sua conta</h2>
        <div className='flex flex-col justify-center gap-4'>
          <input
            className={`${!form ? 'block' : 'hidden'} border border-zinc-400 px-2 py-1 text-xs`}
            type='email'
            placeholder='E-mail'
          />
          <input
            className={`${form ? 'block' : 'hidden'} border border-zinc-400 px-2 py-1 text-xs`}
            type='password'
            placeholder='Senha'
          />
          <ButtonLogin onClick={nextForm}>{form ? 'Acessar' : 'Próximo'}</ButtonLogin>
        </div>
      </div>
      <p className='text-start text-xs text-neutral-600 my-4'>
        Ainda não tem conta no ERP? <strong>Conheça nossos Planos</strong>.
      </p>
    </div>
  )
}

export default Index
