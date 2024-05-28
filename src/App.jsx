import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelIdPage from './pages/HotelIdPage'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hotel/:id' element={<HotelIdPage/>}/>   
      </Routes>
    </>
  )
}

export default App
