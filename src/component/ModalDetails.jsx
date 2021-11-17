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
          <h5>Name: </h5>
          <h4>{patient_name}</h4>
          <h5>Gender: </h5>
          <h4>{gender}</h4>
          <h5>Birth Place: </h5>
          <h4>{birth_place.city_name}</h4>
          <h5>Birth of Date: </h5>
          <h4>{birth_date}</h4>
          <h5>Address: </h5>
          <h4>{address}</h4>
          <h5>Phone Number </h5>
          <h4>{phone_number}</h4>
          {/* <Button color='danger' onClick={toggle}>
            Delete
          </Button> */}
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalDetails
