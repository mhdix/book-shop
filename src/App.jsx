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
      <Offer key={1}>
        <h3>ارزان ترین ها</h3>
      </Offer>
      <Offer key={2}>
        <h3>جدید ترین ها</h3>
      </Offer>
      <Offer key={3}>
        <h3>خواندنی ترین رمان های دنیا</h3>
      </Offer>
      <Introduction />
      <Footer />
    </>
  )
}

export default App
