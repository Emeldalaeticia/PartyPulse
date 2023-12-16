
import Navbar from './Navbar';
import Paypal from './Paypal';
import Footer from './Footer';

function Ticketing() {
  return (
    <>
        <Navbar/>
        <button>Buy Ticket</button>
        <div className="min-h-screen flex items-center justify-center mt-1 bg-gradient-to-br from-purple-400 to-pink-300 rounded-r-lg">

          <div className=''>
            <h1 className='text-xl mb-4'>PROCEED TO MAKE YOUR PAYMENT</h1>
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