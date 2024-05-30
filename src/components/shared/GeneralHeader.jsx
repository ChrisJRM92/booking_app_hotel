import { Link } from "react-router-dom"
import './styles/GeneralHeader.css'

const GeneralHeader = () => {
  return (
    <div className="header_container">
      <div className="header_logo">
        <img className="header_icon" src="/public/logo.png" alt="" />
        <h1 className="header_label"><Link className="label_text" to ='/'>Booking</Link></h1>
      </div>
      
      <nav className="header_items">
        <Link className="item item1" to='/reservation'>Reservaciones</Link>
        <Link className="item item2" to='/register'>Registrarse</Link>
        <Link className="item item3" to='/login'>Iniciar sesion <i class="fa-regular fa-user"></i></Link>
      </nav>
    </div>
  )
}

export default GeneralHeader