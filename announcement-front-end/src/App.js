import './App.css'
import Form from './Components/Form';
import Announcements from './Components/Announcements'
import { BrowserRouter, Route } from 'react-router-dom';
import Details from './Components/Details';

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>

      <BrowserRouter>
        <Route path="/" exact component={Announcements}></Route>
        <Route path="/create" component={Form} ></Route>
        <Route path="/details" component={Details} ></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
