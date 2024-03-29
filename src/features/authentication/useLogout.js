import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { logout as logoutApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'

export function useLogout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries()
      navigate('/login', { replace: true })

      toast.success("You've been logged out")
    },
    onError: (error) => toast.error(error),
  })
  return { logout, isLoading }
}
