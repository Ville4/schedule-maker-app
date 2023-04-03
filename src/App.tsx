import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPage from './components/addPage/addPage';
import BeginPage from './components/beginPage/beginPage';
import Schedule from './components/schedule/schedule';

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<BeginPage/>} />
        <Route path='/add' element={<AddPage/>} />
        <Route path='/schedule' element={<Schedule/>} />
      </Routes>
    </div>
  );

}


export default App