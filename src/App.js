import logo from './logo.svg';
import './App.css';
import HomeContentCardContainer from './HomeContentCardContainer';
import AdvertBanner from './AdvertBanner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AdvertBanner />
        <img src={logo} className="App-logo" alt="logo" />
        <HomeContentCardContainer />
      </header>
    </div>
  );
}

export default App;
