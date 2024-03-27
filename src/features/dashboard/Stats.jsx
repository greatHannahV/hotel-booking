import { formatCurrency } from '../../utils/helpers'
import Stat from './Stat'
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2'

function Stats({ bookings, confirmedStatys, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings?.length
  //2.
  const sales = bookings.reduce((acc, booking) => booking.totalPrice + acc, 0)
  //3
  const checkins = confirmedStatys.length
  //4
  const occupation =
    confirmedStatys.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount)

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        value={numBookings}
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Check in"
        value={checkins}
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate "
        value={Math.round(occupation * 100) + '%'}
        color="yellow"
      />
    </>
  )
}

export default Stats
