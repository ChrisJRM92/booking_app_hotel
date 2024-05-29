import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelIdPage from './pages/HotelIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import GeneralHeader from './components/shared/GeneralHeader'

function App() {
  

  return (
    <>
      <GeneralHeader/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hotel/:id' element={<HotelIdPage/>}/>   
        <Route path='/register' element={<RegisterPage/>}/>   
        <Route path='/login' element={<LoginPage/>}/>   
      </Routes>
    </>
  )
}

export default App
