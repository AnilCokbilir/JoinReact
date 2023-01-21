import './App.css';
import Addtask from './components/Addtask';
import Header from './components/Header';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App flex">
      <div className="leftContent">
        <Navbar/>
      </div>
      <div className="rightContent flex flex-col w-full">
          <Header/>
          <Addtask/>
      </div>
      
    </div>
  );
}

export default App;
