import { useFetchFilms } from "../../hooks/useFetchFilms";
import './GhibliFilms.css'

const GhibliFilms = () => {
  const [films] = useFetchFilms();

  return (
    <>
    <div className="film-list">
      {films.map(film => {
        return (
          <div key={film.id} className="card-film">
            {/* <h1> { film.title } </h1> */}
            <img src={ film.image} alt="" width={400}/>
            <h1>{ film.original_title }</h1>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default GhibliFilms