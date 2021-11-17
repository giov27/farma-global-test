import { useEffect, useState } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap"
import { cityList, patientAdd, patientEdit } from "../api/api"
import './ModalAdd.css'

const ModalUpdate = ({token, modal, toggle, data}) => {
  console.log(data);
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
    patientName:'',
    gender:'L',
    birthDate:'',
    birthPlace:'',
    address:'',
    phoneNumber:null
  })
  const [birthPlaceCity,setbirthPlaceCity] = useState()

  const handleChangeBirthPlace = (e) => {
    getCityList()
    console.log(e.target.value);
    const { name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const getCityList = async ()=>{
    const res = await cityList(token, values.birthPlace)
    const resCity = res.data.response.data
    setbirthPlaceCity(resCity)
    console.log(resCity);
  }

  const postUpdatePatient = async (e)=>{
    e.preventDefault()
    const res = await patientEdit(token, values, patient_id )
    console.log(res);

  }

  // useEffect(() => {
  //   getCityList()
  // }, [])

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
                      id="patientName"
                      name="patientName"
                      placeholder="Patient Name"
                      type="text"
                      onChange={handleChange}
                      value={patient_name}
                    />
                    <Label for="patientName">
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
                      value={gender}
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
                      id="birthDate"
                      name="birthDate"
                      placeholder="Date Of Birth"
                      type="date"
                      onChange={handleChange}
                      // value={birth_date}
                    />
                    <Label for="birthDate">
                      Date Of Birth
                    </Label>
                  </FormGroup>
                </div>
                <div className="col-7">
                  <FormGroup floating className=''>
                    <Input
                      id="birthPlace"
                      name="birthPlace"
                      placeholder="Place Of Birth"
                      type="number"
                      onChange={handleChangeBirthPlace}
                      autoComplete='off'
                      value={birth_place.city_id}
                    />
                    <Label for="birthPlace">
                      Place Of Birth (Input code Area)
                    </Label>
                    <ul className='autoComplete'>
                    {birthPlaceCity && birthPlaceCity.map((city)=>
                          <li key={city.id} className='autoComplete'>{city.city_name} ({city.id})</li>  
                      )}
                    </ul>
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
                  value={address}
                />
                <Label for='address'>Address</Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  id='phoneNumber'
                  name='phoneNumber'
                  placeholder='Phone Number'
                  type='text'
                  onChange={handleChange}
                  value={phone_number}
                />
                <Label for='phoneNumber'>Phone Number</Label>
              </FormGroup>
              <div className="d-flex justify-content-end">
                <Button
                  className='login__button mt-3'
                  type='submit'
                  color='primary'
                  toggle={toggle}>
                    Update Patient Data
                </Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
    </div>
  )
}

export default ModalUpdate
