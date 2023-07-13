import { useEffect, useState } from "react"

const SelectFilms = () => {

  const [selectedOption, setSelectedOption] = useState("")
  
  const [options, setOptions] = useState([])

  useEffect(() => {
    fetch('https://ghibli.rest/films')
      .then(res => res.json())
      .then(res => {
        // const mappedOptions = res.map((option) => ({ id:option.id, title: option.title }))
        setOptions(res)
      })
      .catch(error => console.log(error))
  },[])

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select Film</option>
        {
          options.map((option) => (
              <option key={option.id} value={option.id}>{option.title}</option>
          ))
        }        
      </select>

      <div>{ selectedOption }</div>
    </>
  )
}

export default SelectFilms