import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import OtherHotels from "../components/HotelIdPage/OtherHotels"
import MapHotel from "../components/HotelIdPage/MapHotel"

const HotelIdPage = () => {

  const { id } = useParams()

  const [ hotel, getHotel ] = useFetch()

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels/${id}`
    getHotel(url)
  }, [id])

  // console.log(hotel)
  

  return (
    <div>
      <h2>{hotel?.name}</h2>
      <div>
        <img src={hotel?.images[0].url} alt="" />
      </div>
      {
        hotel && (
          <MapHotel
          lat = {hotel?.lat}
          long = {hotel?.lon}
          />
        )
      }
      <div> 
        <span>{hotel?.rating}</span>
      </div>
      <div>{hotel?.city.name}, {hotel?.city.country}</div>
      <div>
        {hotel?.address}
      </div>
      <p>{hotel?.description}</p>

      <div>
        <OtherHotels 
        city = {hotel?.city}
        id = {id}
        />
      </div>
    </div>
  )
}

export default HotelIdPage