import './App.css'
import  dataItem from './components/data.json';
import { Listing } from './components/Listing';

function App() {
  return (
    <div className="App">
      <Listing data ={dataItem}/>
    </div>
  );
}

export default App;