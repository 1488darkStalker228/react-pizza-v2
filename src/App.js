import './styles/default.scss'
import './styles/common.scss'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import NotFound from './pages/NotFound/NotFound'
import Cart from './pages/Cart/Cart'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
