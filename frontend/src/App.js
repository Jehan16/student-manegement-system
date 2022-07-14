import './App.css';
// import CounterClass from './components/counterClass';
// import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';
import {BrowserRouter as Router, Route} from "react-router-dom";



function App() {
  return (
      <Router>
        <dev>
          <Header/>
          <Route path="/" exact component={AllStudents} /> 
          <Route path="/add" exact component={AddStudent} />
        </dev>
      </Router>
  );
}

export default App;