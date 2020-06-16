import React, {useState} from 'react';
import Autosuggest from 'react-autosuggest';

const Search = (props) => {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
   
    return inputLength === 0 ? [] : props.pokelist.filter(mon =>
      mon.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  const handleSuggestionClick = (e) => {
    setQuery(e.target.innerText)
    handleSubmit()
  }
  const renderSuggestion = suggestion => (
    <div onClick={handleSuggestionClick}>
      {suggestion}
    </div>
  );
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const handleChange = (e) => {
      setQuery(e.target.value)
  }
  const handleSubmit = () => {
      props.handleSearch(query)
  }
  const handleKeyPress = event => {
    if (event.key == 'Enter') {
      handleSubmit();
    }
  };
  const inputProps = {
    placeholder: 'search your \'mon by name or dex number!',
    value: query,
    onChange: handleChange,
    onKeyPress: handleKeyPress
  };
  return (
      <div>
        <input name="name" type="text" value={query} onChange={handleChange} onKeyPress={handleKeyPress}/>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={(name) => name}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          alwaysRenderSuggestions={true}
        />
        <input type="submit" value="Search" onClick={handleSubmit}/>  
      </div>
  )
}
export default Search