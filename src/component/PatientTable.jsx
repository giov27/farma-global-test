import { Button, Table } from "reactstrap"
import { MdUpdate, MdDelete } from 'react-icons/md'
import { FaPlusSquare } from "react-icons/fa";
import { BiDetail } from 'react-icons/bi'
import ModalDelete from "./ModalDelete"
import ModalDetails from './ModalDetails'
import { patientDeleteById } from "../api/api"
import { useState } from "react"
import ModalAdd from "./ModalAdd";
import ModalUpdate from "./ModalUpdate";
import './PatientTable.css'

const PatientTable = ({token, data, pages, getList}) => {
  const page = ((pages-1)*5)+1
  const [indexData, setIndexData] = useState(0)
  const[isSpinner, setIsSpinner] = useState(false)

  const [modalAdd, setModalAdd] = useState(false)
  const toggleAdd = () => setModalAdd(!modalAdd)

  const [modalDelete, setModalDelete] = useState(false)
  const toggleDelete = () => setModalDelete(!modalDelete)
  
  const [modalDetails, setModalDetails] = useState(false)
  const toggleDetails = () => setModalDetails(!modalDetails)
  
  const [modalUpdate, setModalUpdate] = useState(false)
  const toggleUpdate = () => setModalUpdate(!modalUpdate)

  const toggleUpdateIndex = (modal, index) =>{
    setIndexData(index)
    if (modal === 'details') {
      toggleDetails()
    } else if(modal === 'delete') {
      toggleDelete()
    } else {
      toggleUpdate()
    }
  }

  const deletePatient = async()=>{    
    await patientDeleteById(token, data[indexData].patient_id)
    setIsSpinner(true)
    setTimeout(() => {
      toggleDelete()
      setIsSpinner(false)
      getList()
    }, 800);
  }

  return (
    <div className='d-flex flex-column table-style'>
      <div className='d-flex justify-content-between p-2'>
        <h1><span><img src="https://farmagitechs.co.id/wp-content/uploads/2021/06/cropped-Logo-PT.-FG.jpeg" alt="" className='login__logo me-3'/></span>Patient List</h1>
        <div className='align-self-center me-4'>
          <Button onClick={toggleAdd} color='primary' size='md' ><FaPlusSquare/> Add Patient  </Button>
        </div>
      </div>
        <ModalAdd
          modal={modalAdd}
          toggle={toggleAdd}
          token = {token}
          refreshTable={getList}
        />
       <Table
          // bordered
          hover
          responsive
          striped
          size='sm'
          className='text-center'
          
        >
          <thead className=''>
            <tr>
              <th>
                No.
              </th>
              <th>
                Patient Name
              </th>
              <th>
                Gender
              </th>
              <th>
                Birth Place
              </th>
              <th>
                Phone Number
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((data, i)=>
              <tr key={i}>
                <th scope="row">
                  {page+i}
                </th>
                <td>
                  {data.patient_name}
                </td>
                <td>
                  {data.gender}
                </td>
                <td>
                  {data.birth_place.city_name}
                </td>
                <td>
                  {data.phone_number}
                </td>
                <td>
                  <Button onClick={()=>toggleUpdateIndex('details',i) } color='primary' size='md' id='SeeDetails'><BiDetail/></Button>
                  {' '}
                  <Button onClick={()=>toggleUpdateIndex('update',i) } color='primary' size='md'><MdUpdate/></Button>
                  {/* <Button onClick={()=>deletePatient(token, data.patient_id) } color='danger' ><MdDelete/></Button>                             */}
                  {' '}
                  <Button onClick={()=>toggleUpdateIndex('delete', i) } color='danger' size='md'><MdDelete/></Button>                            
                </td>
              </tr>

            )}

            {data &&
            <ModalDelete
              modal={modalDelete}
              toggle={toggleDelete}
              deleteInfo={data[indexData]} //parsingNameData
              deleteById={deletePatient} //function
              token={token}
              isSpinner={isSpinner}
            />
            }

            {data &&
            <ModalDetails
              modal={modalDetails}
              toggle={toggleDetails}
              data={data[indexData]} //parsingNameData
              token={token}
            />
            }

            {data &&
            <ModalUpdate
              modal={modalUpdate}
              toggle={toggleUpdate}
              data={data[indexData]} //parsingNameData
              // indexData={indexData}
              token={token}
              refreshTable={getList}
            />
            }
          </tbody>
        </Table>
      
    </div>
  )
}

export default PatientTable