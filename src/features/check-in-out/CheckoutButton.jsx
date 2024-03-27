import Button from '../../ui/Button'
import ConfirmDelete from '../../ui/ConfirmDelete'
import Modal from '../../ui/Modal'
import { useCheckout } from './useCheckout'

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout()
  return (
    <Modal>
      <Modal.Open opens="delete">
        <Button
          variation="primary"
          size="small"
          // onClick={() => checkout(bookingId)}
          // disabled={isCheckingOut}
        >
          Check out
        </Button>
      </Modal.Open>
      <Modal.Window name="delete">
        <ConfirmDelete
          resourceName="booking"
          onConfirm={() => checkout(bookingId)}
          disabled={isCheckingOut}
        />
      </Modal.Window>
    </Modal>
  )
}

export default CheckoutButton
