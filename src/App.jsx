import './App.css'
import Header from './components/Header/Header'
import NewBook from './components/NewBook/NewBook'
import Offer from './components/Offer/Offer'
import Footer from './components/Footer/Footer';
import Introduction from './components/introduction/Introduction';
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
    {/* toaster error shwo */}
      <Toaster />
    {/* toaster error shwo */}

      <Header />
      <NewBook />
      <Offer />
      <Offer />
      <Offer />
      <Introduction />
      <Footer />
    </>
  )
}

export default App
