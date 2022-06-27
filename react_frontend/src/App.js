import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import Signup from './components/Signup'
import LoginComponent from './components/LoginComponent';
import MultiplicationApp from './components/MultiplicationApp';

function App() {
  return (
    <div className="container">
        <MultiplicationApp />
        {/* <LoginComponent /> */}
    </div>
  );
}

export default App;
