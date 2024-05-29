import { Link } from "react-router-dom"

const GeneralHeader = () => {
  return (
    <div>
      <h1><Link to ='/'>HotelApp</Link></h1>
      <nav>
        <ul>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default GeneralHeader