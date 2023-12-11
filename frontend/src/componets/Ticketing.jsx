
import Navbar from './Navbar';
import Paypal from './Paypal';
import Footer from './Footer';

function Ticketing() {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center mt-1 bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg">
          <div className=''>
            <Paypal/> 
          </div>

         
        </div>
        <div className='mt-0'>
          <Footer/>
        </div>
    
    
    </>
  )
}

export default Ticketing