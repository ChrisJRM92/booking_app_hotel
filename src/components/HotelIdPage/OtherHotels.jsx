import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"


const OtherHotels = ({city, id}) => {

  

  const [ hotelsCity, getHotelsByCity ] = useFetch()

  useEffect(() => {
    // agregamos parametro cityid
    if (city){
      const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`
      getHotelsByCity(url)
    }
  }, [city])
  
  // console.log(hotelsCity)

  return (
    <div className="other_hotel_container">
      <h3 className="other_hotel_title">Other Hotels in {city?.country}</h3>
      <div className="other_hotel_card">
        {hotelsCity?.filter(hotel => hotel.id !== Number(id)).map(hotel => (
          <HotelCard 
          key = {hotel.id}
          hotel = {hotel}
          />
        ))}
      </div>
    </div>
  )
}

export default OtherHotels