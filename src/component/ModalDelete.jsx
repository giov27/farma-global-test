import { Button,  Modal, ModalBody, ModalHeader } from "reactstrap"

const ModalDelete = ({modal, toggle, deleteInfo, deleteById, token}) => {
  const { patient_name, patient_id }= deleteInfo
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
          <h4>Are you sure want to delete patient {patient_name}</h4>
          <Button color='danger' onClick={deleteById}>
            Delete
            {/* {isSpinner ? <Spinner children='' size='sm' /> : 'Delete'} */}
          </Button>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalDelete
