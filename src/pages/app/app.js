import { useState, useEffect } from "react";

const App = (props) => {
  // const { location: {query}} = props;
  const { someProp } = props;
  console.log("111", props);
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(1);
  }, []);

  return (
    <div className="App">
      {someProp}
      <header className="App-header">
        <div>{num}</div>
        <button
          onClick={() => {
            let newNum = num + 1;
            setNum(newNum);
          }}
        >
          add
        </button>
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
};

export default App;
