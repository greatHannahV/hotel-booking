import { useState } from 'react'
import CreateCabinForm from './CreateCabinForm'
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add a new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm
            onCloseModal={() => {
              setIsOpenModal(false)
            }}
          />
        </Modal>
      )}
      {/* {isOpenModal && <CreateCabinForm />} */}
    </div>
  )
}

export default AddCabin
