import React, {} from 'react';
import logo from './logo.svg';
import './App.css';
// import AdvSelector from './aafrom'
// import useFetch from './useFetch'
import useKanye from './useKanye'

function App() {
  // const [reload, setReload] = useState(false)
  // console.log("reload changed to ", reload)
  const [quote] = useKanye(true, "Loading...")
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload/die.
        </p>
        <h1>
          { quote }
        </h1>
        {/* <button onClick={()=>setReload(true)}>Reload</button> */}
        {/* <form>
          <AdvSelector
            className="phrases"
            id={"first-choice"}
            name={"name-first"}
            options={[
              ["dog", "A Good dog"],
              ["forever-alone", "A lifetime of lonliness"]
            ]}
          />
        </form> */}
      </header>
    </div>
  );
}





export default App;
