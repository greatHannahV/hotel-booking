import { useQuery } from '@tanstack/react-query'
import { getStaysTodayActivity } from '../../services/apiBookings'

export function useTodayActivity() {
  const {
    isLoading,
    data: activities,
    error,
  } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ['today-activity'],
  })
  if (error) throw new Error(error.message)
  return { isLoading, activities }
}
