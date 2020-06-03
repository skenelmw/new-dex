import React, {useState} from 'react';

const Search = (props) => {
    const [query, setQuery] = useState("")
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = () => {
        props.handleSearch(query)
    }
    return (
        <div>
          <input name="name" type="text" value={query} onChange={handleChange}/>
          <input type="submit" value="Search" onClick={handleSubmit}/>  
        </div>
    )
}
export default Search