import './App.css'
import { Route, Router, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import routes from './components/Routes/Routes';
function App() {
  return (
    <div className='App'>
        <Header />
        <Routes>
          {
            routes.map((route, index) => {
              return <Route path={route.path} element={route.element} exact={route.exact} key={index} />
            })
          }
        </Routes>
        <Footer />
    </div>
  )
}

export default App
