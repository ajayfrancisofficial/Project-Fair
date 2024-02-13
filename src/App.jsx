import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import Footer from './Components/Footer'
import { useContext } from 'react'
import { tokenAuthContext } from './Context/TokenAuth'

function App() {
const { isAuthorised, setIsAuthorised }=useContext(tokenAuthContext)
  return (
    <>
     <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/login' element={<Auth></Auth>}> </Route>
      <Route path='/register' element={<Auth insideRegister></Auth>}> </Route>
      <Route path='/dashboard' element={isAuthorised?<Dashboard></Dashboard>:<Home></Home>}>  </Route>
      <Route path='/projects' element={isAuthorised?<Projects></Projects>:<Home></Home>}>  </Route>
      <Route path='/*' element={<Navigate to={'/'}></Navigate>}>  </Route>
      

     </Routes>
     <Footer></Footer>
    </>
  )
}

export default App
