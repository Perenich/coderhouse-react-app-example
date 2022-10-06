import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemListContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          < NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Productos' element={<ItemListContainer/>}/>
          <Route path='/Detail/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

