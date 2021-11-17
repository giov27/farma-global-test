import axios from 'axios'

const baseURL = 'https://frontendtest.farmagitechs.co.id/api'

export const authLogin = async (data) =>{
  const url =`${baseURL}/auth/generate_token`
  const { username, password } = data
  const response = await axios.post(url, { username, password })
  return response
}

// Get patient list with pagination
// export const patientList = async (token, page, patient_name, gender, city_id, address ) =>{
export const patientList = async (token, page, data ) =>{
  const url =`${baseURL}/patient/list/${page}`
  const {patient_name, gender, city_id, address} = data
  const response = await axios.get(url,{
    headers:{
      Authorization: `Bearer ${token}`
    },
    params:{
      patient_name: patient_name,
      gender: gender,
      birth_place: city_id,
      address: address
    }
  })
  return response
}

export const patientById = async (token, id) =>{
  const url =`${baseURL}/patient/get/${id}`
  const response = await axios.get(url, {
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  return response
}

export const patientAdd = async (token, data) =>{
  const url =`${baseURL}/patient/add`
  const { patientName, gender, birthDate, birthPlace, address, phoneNumber } = data
  console.log('api'+ birthDate);
  console.log(data);
  const response = await axios.post(url,
  {
    patient_name: patientName,
    gender: gender,
    birth_date: birthDate,
    birth_place: parseInt(birthPlace),
    address: address,
    phone_number: phoneNumber
  },
  {
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  return response
}

export const patientEdit = async (token, data, id) =>{
  const url =`${baseURL}/patient/edit`
  // const { patient_name, gender, birth_date, birth_place, address, phone_number } = data
  const response = await axios.post(url,
  {
    patient_id: id,
    patient_name: "Byanca Harahap",
    gender: "P",
    birth_date: "1994-12-15",
    birth_place: 501,
    address: "Yogyakarta",
    phone_number: "085463728901"
  },
  {
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  return response
}

export const patientDeleteById = async (token, id) =>{
  console.log(id);
  const url =`${baseURL}/patient/delete`
  const response = await axios.post(url,
  {
    patient_id: id,
  },
  {
    headers:{
      Authorization: `Bearer ${token}`
    }, 
  })
  return response
}

export const cityList = async (token, key, page_number=1 ) =>{
  const url =`${baseURL}/city/auto`
  const response = await axios.get(url,
  {
    headers:{
      Authorization: `Bearer ${token}`
    },
    params:{
      p: page_number,
      q: key
    }
  })
  return response
}