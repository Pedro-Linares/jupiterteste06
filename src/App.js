import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Candidates from './pages/Candidates/Candidates';
import User from './pages/User/User';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' exact='true' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/candidates' element={<Candidates/>}></Route>
        <Route path='/users' element={<User/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
