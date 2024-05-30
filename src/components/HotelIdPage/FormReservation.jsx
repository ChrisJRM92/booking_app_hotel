import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"

const FormReservation = ({hotelId}) => {

  const {register, handleSubmit, reset} = useForm()

  const [ , createBooking] = useCrud()

  const submit = (data) =>{
    const url = 'https://hotels-api.academlo.tech/bookings'
    const objData = {
      ...data,
      hotelId
    }
    createBooking(url, objData, true)
    reset({
      checkIn: '',
      checkOut: ''
    })
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h3>Reserva ahora</h3>
      <label>
        <span>Check-in</span>
        <input {...register('checkIn')} type="date" />
      </label>
      <label>
        <span>Check-out</span>
        <input {...register('checkOut')} type="date" />
        <button>Reservar ahora</button>
      </label>

    </form>
  )
}

export default FormReservation