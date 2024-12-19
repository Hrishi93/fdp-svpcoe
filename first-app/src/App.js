import './App.css';
import DemoFC from './components/DemoFC';
import DemoCC from './components/DemoCC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome in App Component</h1>
       <Demo />
       <p>-----------------</p>
       <Demo1/>
       <p>-----------------</p>
       <DemoFC/>
       <p>---------------------</p>
       <DemoCC />
      </header>
    </div>
  );
}


//Demo 
function Demo(){
  return (
    <>
    <h3>Welcome in Demo Component</h3>
    <p>Demo is a Functional Component</p>
    </>
  );
}

//Demo1
function Demo1(){
  return (
    <>
    <p>Welcome in Demo1 as Fun Comp</p>
    </>
  );
}

export default App;
