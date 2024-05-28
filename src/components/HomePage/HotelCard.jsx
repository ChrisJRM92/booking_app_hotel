import { useNavigate } from "react-router-dom"
import './styles/HotelCard.css'

const HotelCard = ({hotel}) => {

    // console.log(hotel)

  const navigate = useNavigate()

  const navigateHotelId = () => {
  navigate(`/hotel/${hotel.id}`)
  }

  return (
    <div className="container_card">
      {/* --------Header content---------- */}
      <header className="header_content">
        <img className="header_img" src={hotel.images[0].url} alt="" />
      </header>
      {/* ----------Body content--------- */}
      <div className="body_content">
        <h3 className="hotel_title">{hotel.name}</h3>
        <div className="address">
          <i className="fa-solid fa-location-dot"></i>
          <p className="hotel_address">{hotel.city.name}, {hotel.city.country}</p>
        </div>
        <div className="rating">
          <i className="fa-solid fa-star-half-stroke"></i>
          <p className="hotel_rating">{hotel.rating}</p>
        </div>
        <hr />
        <div className="services">
          <h3 className="services_title">Servicios</h3>
          <div className="services_icons">
            <div className="service"><i className="fa-solid fa-tv styles_services"></i></div>
            <div className="service"><i className="fa-solid fa-wifi styles_services"></i></div>
            <div className="service"><i className="fa-solid fa-water-ladder styles_services"></i></div>
            <div className="service"><i className="fa-solid fa-car styles_services"></i></div>
            <div className="service"><i className="fa-solid fa-utensils styles_services"></i></div>
          </div>
        </div>
        <hr />
      </div>
      {/* ----------Footer content--------- */}
      <div className="footer_content">
        <div className="price_content">
          <p className="hotel_price">$ {hotel.price}</p>
          <p className="description_price">Por noche</p>
        </div>
        <div className="buttom_content">
          <button className="hotel_see_more" onClick={navigateHotelId}>See more...</button>
        </div>
      </div>
    </div>
  )
}

export default HotelCard