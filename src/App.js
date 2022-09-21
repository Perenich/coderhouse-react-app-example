import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/navbar/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <NavBar/>
      </div>
      <div>
        <ItemListContainer/>
      </div>
      
    </div>
  );
}

export default App;

