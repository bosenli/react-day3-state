import './App.css';
import Message from './components/Message';


//https://reactjs.org/docs/hooks-intro.html
//Props:
// immutable (can't be changed);
// State: not immutable (can be changed),
// can be passed down into another component via props
function App() {

  return (
    <div className="App">
      <Message />
    </div>
  );
}

export default App;
