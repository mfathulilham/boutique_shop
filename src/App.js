import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage/Homepage';
import Learning from './pages/Learning/Learning';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Todolist from './pages/Todolist/Todolist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />}/>
        <Route path='/productlist' element={<ProductList />}/>
        <Route path='/productdetail' element={<ProductDetail />}/>
        <Route path='/todolist' element={<Todolist />}/>
        <Route path='/learning' element={<Learning />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
