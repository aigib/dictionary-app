import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p> DICTIONARY APP </p>
        </header>

        <main>
          <Dictionary defaultKeyWord="coffee" />
        </main>

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/aigib" target="_blank" rel="noreferrer">
            Aigi Buht
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/aigib/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://verdant-raindrop-27ac08.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
