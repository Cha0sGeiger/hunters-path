import './scss/style.scss';
import GameLogo from './assets/svg/hunters-path-logo.svg.svg';
import { Button } from './components/button/Button';

function App() {
  return (
    <div className="App">
      <img className="game-logo" src={GameLogo} alt="hunters'path"/>
      <div className="button-wrap center">
        <Button label="White side" color='primary'/>
        <Button label="Dark side"/>
      </div>
    </div>
  );
}

export default App;
