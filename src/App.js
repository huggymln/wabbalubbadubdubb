import logo from './logo.svg';
import './App.css';
import GetMorty from './components/Bevies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Get your Rick & Morty Character : </h2>
        <GetMorty />
      </header>
    </div>
  );
}

export default App;
