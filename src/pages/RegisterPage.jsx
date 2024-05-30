import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './styles/RegisterPage.css'

const RegisterPage = () => {

  const { register, handleSubmit, reset } = useForm()

  const {createUser} = useAuth()

  const submit = data => {
    // console.log(data)
    createUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'male'
    })
  }

  return (
    <div className="register_container">
      <div className="hi_logo"></div>
      <form className="form_register" onSubmit={handleSubmit(submit)}>
        <h2>Registro</h2>
        <div>
          <label>
            <p>Nombre</p>
            <input {...register('firstName')} type="text" />
          </label>
          <label>
            <p>Apellido</p>
            <input {...register('lastName')} type="text" />
          </label>
          <label>
            <p>Correo</p>
            <input {...register('email')} type="email" />
          </label>
          <label>
            <p>Contraseña</p>
            <input {...register('password')} type="password" />
          </label>
          <label>
            <p>Genero</p>
            <select {...register('gender')}>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <button className="buttom_register">Registrarse</button>
      </form>
    </div>
  )
}

export default RegisterPage