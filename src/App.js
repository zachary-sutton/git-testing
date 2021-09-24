import logo from './logo.svg';
import './App.css';
import HomeContentCard from './HomeContentCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomeContentCard />
      </header>
    </div>
  );
}

export default App;
