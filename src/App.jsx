import './App.css'
import { Route, Routes } from 'react-router-dom';
import Pages from './components/Pages';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <main>
      <Routes>
        <Route path='' element={<Pages />} exact />
        <Route path='/a' element={<Footer />} />
      </Routes>
    </main>
  )
}

export default App
