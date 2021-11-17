import { useEffect, useState } from 'react'
import { Button, ButtonGroup, Spinner, Table } from 'reactstrap'
import { patientList } from '../api/api'
import PatientTable from '../component/PatientTable'

import './Patient.css'
import ModalAdd from '../component/ModalAdd';


const Patient = () => {
  let token = localStorage.getItem('token')
  const [pages,setPages] = useState(1)
  const [patient, setPatient] = useState('')
  const [isSpinner, setIsSpinner] = useState(false)


  const [patientParams, setPatientParams]= useState({
    patient_name:'',
    gender:'',
    city_id:'',
    address:''
  })

  const getPatientList = async (token, page, data)=>{
    setIsSpinner(true)
    const res = await patientList(token, page, data)
    setTimeout(() => {
      setPatient(res.data.response.data)
      setIsSpinner(false)
    }, 800);
  }


  useEffect(() => {
    getPatientList(token, pages, patientParams)
  }, [pages])

  return (
    <div className='container-fluid patient__page'>            
      <div className='patient__table mx-auto mb-4'>
        {isSpinner ? 
        <div className='d-flex justify-content-center pt-5'>
          <Spinner style={{height:'4vw', width:'4vw'}} />
        </div>
        :
        <PatientTable
          data={patient}
          token={token}
        />
        }
      </div>
      <div className='d-flex justify-content-center'>
        <ButtonGroup >
          <Button color='primary' disabled={pages === 1} onClick={()=>setPages(pages-1)}>
            {'<'}
          </Button>
          <Button color='primary' onClick={()=>setPages(1)}>
            First
          </Button>
          <Button color='primary' onClick={()=>{setPages(pages+1)}}>
            {'>'}
          </Button>
        </ButtonGroup>
      </div>

      {/* <ModalDelete
        modal={modalDelete}
        toggle={toggleDelete}
        name={patient.patient_name} //parsingNameData
        deleteById={deletePatient} //function
      /> */}

      
    </div>
  )
}

export default Patient
