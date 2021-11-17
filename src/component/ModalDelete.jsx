import { Button,  Modal, ModalBody, ModalHeader, Spinner } from "reactstrap"

const ModalDelete = ({modal, toggle, deleteInfo, deleteById, token,isSpinner}) => {
  const { patient_name }= deleteInfo
  return (
    <div>
      <Modal
        centered
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>
          Delete Patient
        </ModalHeader>
        <ModalBody>
          <h4 className='text-center'>Are you sure want to delete {patient_name} ?</h4>
          <Button color='danger' onClick={deleteById} block>
            {isSpinner ? <Spinner size='sm' /> : 'Delete'}
          </Button>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalDelete
