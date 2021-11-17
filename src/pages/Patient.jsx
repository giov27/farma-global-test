import { useEffect, useState } from 'react'
import { Button, ButtonGroup, Table } from 'reactstrap'
import { patientList } from '../api/api'
import PatientTable from '../component/PatientTable'
import { FaPlusSquare } from "react-icons/fa";
import './Patient.css'
import ModalAdd from '../component/ModalAdd';


const Patient = () => {
  let token = localStorage.getItem('token')
  const [pages,setPages] = useState(2)
  const [patient, setPatient] = useState('')
  const [modalAdd, setModalAdd] = useState(false)
  const toggleAdd = () => setModalAdd(!modalAdd)


  const [patientParams, setPatientParams]= useState({
    patient_name:'',
    gender:'',
    city_id:'',
    address:''
  })

  const getPatientList = async (token, page, data)=>{
    const res = await patientList(token, page, data)
    console.log(res.data.response.data);
    setPatient(res.data.response.data)
  }

  useEffect(() => {
    getPatientList(token, 1, patientParams)
  }, [])
  return (
    <div>
      {/* <Navbar /> */}
      <h1>Patient List</h1>
      <button onClick={toggleAdd}><FaPlusSquare size='sm'/></button>
      <ModalAdd
        modal={modalAdd}
        toggle={toggleAdd}
        token = {token}
      />
      
      <div className='patient__table mx-auto mb-4'>
        <PatientTable
          data={patient}
        />
      </div>
      <div className='d-flex justify-content-center'>
        <ButtonGroup>
          <Button disabled={pages === 1}>
            {'<'}
          </Button>
          <Button>
            First
          </Button>
          <Button onClick={()=>{setPages(pages+1)}}>
            {'>'}
          </Button>
        </ButtonGroup>
      </div>


      
    </div>
  )
}

export default Patient
