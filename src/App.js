
import './App.css';
import Countdown from './Countdown';

function App() {
  return (
    <div className="App">
      <h2>WE'RE LAUNCHING SOON</h2>
      <Countdown/>
      <div className='social'>
        <img src='/images/icon-facebook.svg' alt='facebook'/>
        <img src='/images/icon-pinterest.svg' alt='pinterest'/>
        <img src='/images/icon-instagram.svg' alt='instagram'/>
      </div>
    </div>
  );
}

export default App;
