
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import TrendingVideos from './components/TrendingVideos'

function App() {
  return (
    <div className="bg-gray-950">
       <Navbar />
       <Home />
       <TrendingVideos />
       <Footer />
    </div>
  )
}

export default App
