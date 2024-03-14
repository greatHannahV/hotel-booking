import CreateCabinForm from './CreateCabinForm'
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add a new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
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
