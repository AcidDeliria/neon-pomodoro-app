import './App.css';
import Pomodoro from './components/pomodoro.js';
import Header from './components/header.js'
;

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
