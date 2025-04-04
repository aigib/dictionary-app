import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "903ede6a0f302b5a764fdee9o1cc03t8";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = "903ede6a0f302b5a764fdee9o1cc03t8";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>What word do you want to look up?</h1>

        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyWord}
            />
          </form>

          <small className="hint"> i.e. love, sun, ocean</small>
        </section>
        <Results results={results} />

        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
