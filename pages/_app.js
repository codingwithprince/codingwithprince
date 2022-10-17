import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <div className='grid grid-cols-12 md:p-5 p-3 gap-4'>
          <div className='col-span-12 md:col-span-3 p-3 shadow-lg'>
              <Sidebar />
          </div>
          <main className='col-span-12 md:col-span-9 p-3 shadow-lg'>
             <Navbar />
             <Component {...pageProps} />
          </main>  
         </div> 
}

export default MyApp
