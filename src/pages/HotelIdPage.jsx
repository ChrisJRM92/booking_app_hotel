import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import OtherHotels from "../components/HotelIdPage/OtherHotels"
import MapHotel from "../components/HotelIdPage/MapHotel"
import FormReservation from "../components/HotelIdPage/FormReservation"
import './styles/HotelIdPage.css'

const HotelIdPage = () => {

  const { id } = useParams()

  const [ hotel, getHotel ] = useFetch()

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels/${id}`
    getHotel(url)
  }, [id])

  // console.log(hotel)
  

  return (
    <div className="container_Id_page">
      <h2>{hotel?.name}</h2>
      <div> 
        <span>{hotel?.rating}</span>
      </div>
      <div>{hotel?.city.name}, {hotel?.city.country}</div>
      <div>
        {hotel?.address}
      </div>
      <div className="conatiner_info">
        <img className="slider" src={hotel?.images[0].url} alt="" />
        <div className="map_map">
        {
          hotel && (
            <MapHotel
            lat = {hotel?.lat}
            long = {hotel?.lon}
            />
          )
        }
        </div>
      </div>
      <p className="hotel_description">{hotel?.description}</p>

      <section className="reservation_now">
        <FormReservation
        hotelId = {id}
        />
      </section>

      <div className="other_hotels">
        <OtherHotels 
        city = {hotel?.city}
        id = {id}
        />
      </div>
    </div>
  )
}

export default HotelIdPage