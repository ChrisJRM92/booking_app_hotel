import axios from "axios"

const useAuth = () => {

  // Registrar usuario
  const createUser = (data) =>{
    console.log(data)
    const url = 'https://hotels-api.academlo.tech/users'
    axios.post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  // Loggin
  const loginUser = (data) =>{
    // console.log(data)
    const url = 'https://hotels-api.academlo.tech/users/login'
    axios.post(url, data)
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userLogged', JSON.stringify(res.data.user))
    })
    .catch(err => console.log(err))
  }

  return { createUser, loginUser }
}

export default useAuth