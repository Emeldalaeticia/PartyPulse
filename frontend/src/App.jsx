
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './componets/Login'
import Register from './componets/Register'
import HomePage from './componets/HomePage'
import EventList from './componets/EventList'
import EventDetails from './componets/EventDetails'
import DashboardLayout from './componets/dashboard/DashboardLayout'
import EventCreationForm from './componets/EventcreationForm'
function App() {
  

  return (
    <>
      
        <div className='text-white h-[100vh] justify-center items-center bg-cover'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          
          <Route path="/eventlist" element={<EventList/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/events/:eventId" element={<EventDetails />}/>
          
          <Route path="/createevent" element={<EventCreationForm />}></Route>


          {/* Dashboard Route */}
          <Route path="/dashboard/*" element={<DashboardLayout />} />

        </Routes>
      
    
      </div>
      
    </>
  )
}

export default App
