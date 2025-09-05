import './App.css'
import { data } from './components';
import { Listing } from './components/Listing';

function App() {
  return (
    <div className="App">
      <Listing data={data}/>
    </div>
  );
}

export default App;