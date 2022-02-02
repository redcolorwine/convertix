import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className='App-wrapper'>
       maincontent
     </div>
     <Footer/>
    </div>
  );
}

export default App;
