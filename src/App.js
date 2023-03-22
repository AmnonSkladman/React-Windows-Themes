import { useSelector } from 'react-redux'
import logo from './features/themer/images/windows.png';
import win98logo from './features/themer/images/win98.png';
import './App.css';
import Themer from './features/themer/Themer.jsx';
import styles from './features/themer/Themer.module.scss'

function App() {
  const theme = useSelector(state => state.themer.value)

  const logoSwitcher = () => {
    switch(theme) {
    case 'win98':
        return win98logo;
    default:
        return logo
}};

  return (
    <div className="App">
      <header className={`App-header ${styles[theme] || ''}`}>
        <img src={logoSwitcher()} className="App-logo" alt="logo" />
        <Themer />
      </header>
    </div>
  );
}

export default App;
