import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHotelsThunk } from "../Store/slices/products.slice"
import HotelCard from "../components/HomePage/HotelCard"
import './styles/HomePage.css'

const HomePage = () => {

  const products = useSelector(states => states.products)

  console.log(products)

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  }, [])
  

  return (
    <div>
      <div className="main_header">
        <p>Menu superior aqui</p>
      </div>
      <div className="main_body">
        <div class="div1">
          <p>Menu lateral aqui</p>
        </div>
        <div class="div2">
          <p>Buscar aqui</p>
        </div>
        <div class="div3">
        {
          products?.map(hotel => (
            <HotelCard
            key = {hotel.id}
            hotel = {hotel}
            />
          ))
        }
        </div>
      </div>
      <div className="main_footer">
        <p>Todos los derechos reservados aqui</p>
      </div>
    </div>
  )
}

export default HomePage