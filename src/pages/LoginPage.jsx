import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './styles/LoginPage.css'

const LoginPage = () => {

  const {handleSubmit, register, reset} = useForm()

  const { loginUser } = useAuth()

  const submit = data =>{
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }

  return (
    <div className="login_container">
      <div className="img_icon"></div>
      <form className="form_content" onSubmit={handleSubmit(submit)}>
        <h2 className="title_login">Iniciar sesion</h2>
        <div className="form_elements">
          <label>
            <p className="label_text">Correo</p>
            <input {...register('email')} type="email" placeholder="correo@mail.com" />
          </label>
          <label>
            <p className="label_text">Contraseña</p>
            <input {...register('password')} type="password" />
          </label>
        </div>
        <button className="button_login">Iniciar sesion</button>
      </form>
    </div>
  )
}

export default LoginPage