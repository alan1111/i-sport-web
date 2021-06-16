import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  // const { location: {query}} = props;
  console.log('111', props)
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(1);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{num}</div>
        <button onClick={() => {
          let newNum = num+1;
          setNum(newNum);
        }}>add</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
