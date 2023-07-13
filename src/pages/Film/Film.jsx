import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Film = () => {
    let {id} = useParams()

    const [film, setFilm] = useState({})

    useEffect(() => {
        fetch(`https://ghibli.rest/films?id=${id}`)
            .then(res => res.json())
            .then(res => setFilm(res))
            .catch(error => console.log(error))
    }, [])

  return (
    <>
        <h1>{film.original_title}</h1>
        <img src={film.image} alt="" />
    </>
  )
}

export default Film