
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpProfile from './components/SignUpProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUpProfile/>}/>
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
