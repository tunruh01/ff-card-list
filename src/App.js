import './App.css';
import Collection from './components/Collection'
import * as smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();
function App() {
  return (
    <div className="App">
      <Collection/>
    </div>
  );
}

export default App;
