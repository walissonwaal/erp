import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PrivateRoute = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const checkToken = () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token')

        if (!token) {
          toast.error(
            'Você não está logado. Redirecionando para a página de login...'
          )
          setTimeout(() => {
            router.push('/') // Redireciona para a página de login após 5 segundos
          }, 5000)
        }
      }
    }

    checkToken()
  }, [router])

  if (typeof window === 'undefined' || !localStorage.getItem('token')) {
    return null // Retorna nulo se o usuário não estiver logado ou estiver no lado do servidor
  }

  return <>{children}</> // Renderiza os componentes filho
}

export default PrivateRoute
