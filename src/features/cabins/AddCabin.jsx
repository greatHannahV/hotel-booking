import CreateCabinForm from './CreateCabinForm'
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
import CabinTable from './CabinTable'
function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add a new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Open the table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  )
}
export default AddCabin

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false)
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add a new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm
//             onCloseModal={() => {
//               setIsOpenModal(false)
//             }}
//           />
//         </Modal>
//       )}
//       {/* {isOpenModal && <CreateCabinForm />} */}
//     </div>
//   )
// }

// export default AddCabin
