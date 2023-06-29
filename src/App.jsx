
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SelectFilms from './common/SelectFilms/SelectFilms'
import GhibliFilms from './pages/GhibliFilms/GhibliFilms'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<SelectFilms />}/>
      <Route path="/films" element={<GhibliFilms />} />
    </Routes>
         {/* <GhibliFilms /> */}
         {/* <SelectFilms /> */}
    </>
  )
}

export default App
