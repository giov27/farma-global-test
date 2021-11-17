import { useEffect, useState } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap"
import { cityList } from "../api/api"
import './ModalAdd.css'

const ModalAdd = ({token, modal, toggle}) => {
  const [values, setValues]= useState({
    patientName:'',
    gender:'L',
    birthDate:'',
    birthPlace:'Samarinda',
    address:'',
    phoneNumber:''
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
            Add Patient
          </ModalHeader>
          <ModalBody>
            <Form inline onSubmit=''>
              <div className="row g-2">
                <div className="col-8">
                  <FormGroup floating>
                    <Input
                      id="patientName"
                      name="patientName"
                      placeholder="Patient Name"
                      type="text"
                      // onChange={handleChange}
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
                      // onChange={handleChange}
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
                <div className="col-md">
                  <FormGroup floating>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      placeholder="Date Of Birth"
                      type="date"
                      
                      // onChange={handleChange}
                    />
                    <Label for="birthDate">
                      Date Of Birth
                    </Label>
                  </FormGroup>
                </div>
                <div className="col-md">
                  <FormGroup floating className=''>
                    <Input
                      id="birthPlace"
                      name="birthPlace"
                      placeholder="Place Of Birth"
                      type="text"
                      onChange={handleChangeBirthPlace}
                      autoComplete='off'
                    />
                    <Label for="birthPlace">
                      Place Of Birth
                    </Label>
                    <ul className='autoComplete'>
                    {birthPlaceCity && birthPlaceCity.map((city)=>
                          <li key={city.id} className='autoComplete'>{city.city_name}</li>  
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
                />
                <Label for='address'>Address</Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  id='phoneNumber'
                  name='phoneNumber'
                  placeholder='phoneNumber'
                  type='text'
                />
                <Label for='phoneNumber'>phoneNumber</Label>
              </FormGroup>
              <div className="d-flex justify-content-end">
                <Button
                  className='login__button mt-3'
                  type='submit'
                  color='primary'
                  toggle={toggle}>
                    Add Patient
                </Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
    </div>
  )
}

export default ModalAdd
