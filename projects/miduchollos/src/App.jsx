import { useState } from 'react'
import './App.css'
import { Route, Routes, Link, useParams, Outlet } from 'react-router-dom'
import { NavLink } from './NavLink'

// Componentes
const Home = () => <h1>Home</h1>
const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]

  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {tacos.map(taco => (
          <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))}
      </ul>
    </div>
  )
}

const Tacos = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Tacos</h1>
      {name}
      <Link to='details'> Ir al detalle</Link>
      <Outlet />
      {/* Se usa para entrar a la ruta anidada */}
    </div>
  )
}

const TacoDetails = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Details del Taco {name}</h1>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <header>
        <h1>darapepe.dev</h1>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/search-page'>Search Page</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/:name' element={<Tacos />} >
          <Route path='details' element={<TacoDetails />} /> //Ruta anidada
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
