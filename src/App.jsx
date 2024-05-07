import './App.scss';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Setting from './components/pages/Setting/Setting';
import Home from './components/pages/Home/Home';
import NotPage from './components/pages/404/NotPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/*' element={<NotPage/>}/>
      </Routes> 
    
    </div>
  );
}


export default App;
