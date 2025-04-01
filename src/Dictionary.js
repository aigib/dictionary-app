import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "903ede6a0f302b5a764fdee9o1cc03t8";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>What word do you want to look up?</h1>

      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>

      <small className="hint"> i.e. love, sun, ocean</small>
      <Results results={results} />
    </div>
  );
}
