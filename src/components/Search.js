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
  const renderSuggestion = suggestion => (
    <div>
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
  const handleSubmit = (q) => {
      props.handleSearch(q)
  }
  const onSuggestionSelected = (e, {suggestionValue}) => {
    setQuery(suggestionValue)
    handleSubmit(suggestionValue)
  }
  const inputProps = {
    placeholder: '\'mon name here',
    value: query,
    onChange: handleChange,
  };
  return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={(name) => name}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          alwaysRenderSuggestions={true}
        />
        <input type="submit" value="Search" onClick={() => handleSubmit(query)}/>  
      </div>
  )
}
export default Search