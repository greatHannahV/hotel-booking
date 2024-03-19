import BookingTable from '../features/bookings/BookingTable'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import SortBy from '../ui/SortBy'

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <SortBy
          options={[
            { value: 'name-asc', label: 'Sort by name (A-Z)' },
            { value: 'name-disc', label: 'Sort by name (Z-A)' },
            { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
            { value: 'regularPrice-disc', label: 'Sort by price (high first)' },
            { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' },
            {
              value: 'maxCapacity-disc',
              label: 'Sort by capacity (high first)',
            },
          ]}
        />
      </Row>
      <BookingTable />
    </>
  )
}

export default Bookings
