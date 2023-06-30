
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SelectFilms from './common/SelectFilms/SelectFilms'
import GhibliFilms from './pages/GhibliFilms/GhibliFilms'
import Film from './pages/Film/Film'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<SelectFilms />}/>
      <Route path="/films" element={<GhibliFilms />} />
      <Route path="/film/:id" element={<Film />} />
    </Routes>
         {/* <GhibliFilms /> */}
         {/* <SelectFilms /> */}
    </>
  )
}

export default App
