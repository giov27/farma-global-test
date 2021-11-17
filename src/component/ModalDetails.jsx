import { Button,  Modal, ModalBody, ModalHeader } from "reactstrap"

const ModalDetails = ({modal, toggle, data}) => {
  const { 
    patient_id, 
    patient_name, 
    gender, 
    birth_date,
    birth_place,
    address,
    phone_number }= data
  return (
    <div>
      <Modal
        centered
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>
          Patient Details
        </ModalHeader>
        <ModalBody>
          <h5>Name: {patient_name}</h5>
          <h5>Gender: {gender}</h5>
          <h5>Birth Place: {birth_place.city_name}</h5>
          <h5>Birth of Date: {birth_date}</h5>
          <h5>Address: {address}</h5>
          <h5>Phone Number: {phone_number}</h5>
          {/* <Button color='danger' onClick={toggle}>
            Delete
          </Button> */}
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalDetails
