import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"


const useCrud = () => {

  const [response, setresponse] = useState()

  // El whithtoken es por si en un futuro se necesite utilizar o no un token de autorizacion
  // Create
  const postApi = (url, data, whithToken) =>{
    axios.post(url, data, whithToken ? getConfigToken() : {})
    .then(res => {
      console.log(res.data)
      setresponse(response ? [...response, res.data] : [res.data])
    })
    .catch(err => console.log(err))
  }
  
  // Read
  const getApi = (url, whithToken) =>{
    axios.get(url, whithToken ? getConfigToken() : {})
    .then(res => setresponse(res.data))
    .catch(err => console.log(err))
  }
  
  // Update
  const updateApi = (url, whithToken) =>{
    
  }

  // Delete
  const deleteApi = (url, whithToken) =>{
    axios.delete(url, whithToken ? getConfigToken() : {})
    .then(res => {
      console.log(res.data)
      const id = url.split('/').at(-1)
      setresponse(response.filter(e => id !== e.id))
    })
    .catch(err => console.log(err))
  }

  return [response, postApi, getApi, updateApi, deleteApi]
}

export default useCrud