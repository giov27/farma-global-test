import { Table } from "reactstrap"
import { MdUpdate, MdDelete } from 'react-icons/md'
import { BiDetail } from 'react-icons/bi'

const PatientTable = ({data}) => {
  return (
    <div>
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
                  {i+1}
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
                  <button><BiDetail/></button>
                  <button><MdUpdate/></button>
                  <button><MdDelete/></button>                            
                </td>
              </tr>

            )}

            {/* <tr>
              <th scope="row">
                2
              </th>
              <td>
                Jacob
              </td>
              <td>
                Thornton
              </td>
              <td>
                @fat
              </td>
              <td>
                @fat
              </td>
              <td>
                <button><BiDetail/></button>
                <button><MdUpdate/></button>
                <button><MdDelete/></button>                            
              </td>
            </tr>
            <tr>
              <th scope="row">
                3
              </th>
              <td>
                Larry
              </td>
              <td>
                the Bird
              </td>
              <td>
                @twitter
              </td>
              <td>
                @twitter
              </td>
              <td>
                <button><BiDetail/></button>
                <button><MdUpdate/></button>
                <button><MdDelete/></button>                            
              </td>
            </tr> */}
          </tbody>
        </Table>
      
    </div>
  )
}

export default PatientTable