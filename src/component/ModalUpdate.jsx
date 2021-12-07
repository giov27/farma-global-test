import { useEffect, useState } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Spinner } from "reactstrap"
import { patientEdit } from "../api/api"
import './ModalAdd.css'

const ModalUpdate = ({token, modal, toggle, data, refreshTable}) => {
  console.log('modal: ' + data.birth_place.city_id);
  const [messageUpdate, setMessageUpdate] = useState({
    code: null,
    message: ''
  })
  const [isSpinner, setIsSpinner] = useState(false)

  const { 
    patient_id, 
    patient_name, 
    gender, 
    birth_date,
    birth_place,
    address,
    phone_number 
  }= data
  const [values, setValues]= useState({ 
    patient_id: patient_id, 
    patient_name: patient_name, 
    gender: gender, 
    birth_date: birth_date,
    birth_place: birth_place.city_id,
    address: address,
    phone_number: phone_number 
  })
  useEffect(() => {
    setValues({ 
      patient_id: data.patient_id, 
      patient_name: data.patient_name, 
      gender: data.gender, 
      birth_date: data.birth_date,
      birth_place: data.birth_place.city_id,
      address: data.address,
      phone_number: data.phone_number 
    })
  }, [data])

  const handleChangeBirthPlace = (e) => {
    // getCityList()
    const { name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleChange = (e) => {
    const { name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  // const getCityList = async ()=>{
  //   const res = await cityList(token, values.birthPlace)
  //   const resCity = res.data.response.data
  //   setbirthPlaceCity(resCity)
  //   console.log(resCity);
  // }

  const postUpdatePatient = async (e)=>{
    e.preventDefault()
    const res = await patientEdit(token, values, patient_id )
    setIsSpinner(true)
    setTimeout(() => {
      if(res){
        setMessageUpdate({
          code: res.status,
          message: res.data.metaData.message
        })
        refreshTable()
        toggle()
      } else {
        setMessageUpdate({
          code: 500,
          message: 'Failed to add patient'
        })
      }
      setIsSpinner(false)
    }, 1000);

  }

  return (
    <div>
       <Modal
        isOpen={modal}
        toggle={toggle}
        centered
      >
          <ModalHeader toggle={toggle}>
            Update Patient
          </ModalHeader>
          <ModalBody>
            <Form inline onSubmit={postUpdatePatient}>
              <div className="row g-2">
                <div className="col-8">
                  <FormGroup floating>
                    <Input
                      id="patient_name"
                      name="patient_name"
                      placeholder="Patient Name"
                      type="text"
                      onChange={handleChange}
                      value={values.patient_name}
                    />
                    <Label for="patient_name">
                      Patient Name
                    </Label>
                  </FormGroup>
                </div>
                <div className="col-4">
                  <FormGroup floating>
                    <Input
                      id="gender"
                      name="gender"
                      placeholder="Gender"
                      type="select"
                      onChange={handleChange}
                      value={values.gender}
                    >
                      <option value='L'>L</option>
                      <option value='P'>P</option>
                    </Input>
                    <Label for="username">
                      Gender
                    </Label>
                  </FormGroup>
                </div>
              </div>
              <div className="row g-2">
                <div className="col-5">
                  <FormGroup floating>
                    <Input
                      id="birth_date"
                      name="birth_date"
                      placeholder="Date Of Birth"
                      type="date"
                      onChange={handleChange}
                      value={values.birth_date}
                    />
                    <Label for="birth_date">
                      Date Of Birth
                    </Label>
                  </FormGroup>
                </div>
                <div className="col-7">
                  <FormGroup floating className=''>
                    <Input
                      id="birth_place"
                      name="birth_place"
                      placeholder="Place Of Birth"
                      type="number"
                      onChange={handleChangeBirthPlace}
                      autoComplete='off'
                      value={values.birth_place}
                    />
                    <Label for="birth_place">
                      Place Of Birth (Input code Area)
                    </Label>
                    {/* <ul className='autoComplete'>
                    {birthPlaceCity && birthPlaceCity.map((city)=>
                          <li key={city.id} className='autoComplete'>{city.city_name} ({city.id})</li>  
                      )}
                    </ul> */}
                  </FormGroup>
                </div>
              </div>
              <FormGroup floating>
                <Input
                  id='address'
                  name='address'
                  placeholder='Address'
                  type='textarea'
                  onChange={handleChange}
                  value={values.address}
                />
                <Label for='address'>Address</Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  id='phone_number'
                  name='phone_number'
                  placeholder='Phone Number'
                  type='text'
                  onChange={handleChange}
                  value={values.phone_number}
                />
                <Label for='phone_number'>Phone Number</Label>
              </FormGroup>
              <div className="d-flex justify-content-end flex-column">
                {messageUpdate.code && <p className='text-center'>{messageUpdate.message}</p> }
                <Button
                  className='login__button mt-3'
                  type='submit'
                  color='primary'
                  toggle={toggle}>
                    {isSpinner? <Spinner size='sm'/>: 'Update Patient Data'}
                </Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
    </div>
  )
}

export default ModalUpdate
