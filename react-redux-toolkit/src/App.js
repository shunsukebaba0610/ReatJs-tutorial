import './App.css';
import { ChangeColor, Login, Profile } from './components';


function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor /> 
    </div>
  );
}

export default App;
