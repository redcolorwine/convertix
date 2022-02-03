import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Physmath from './components/physmath/physmath';
import FinanceContainer from './components/finance/financeContainer';
import MathContainer from './components/math/mathContainer';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='App-wrapper'>
          <Routes>
            <Route path='/' element={<FinanceContainer/>} />
            <Route path='/finance' element={<FinanceContainer />} />
            <Route path='/math' element={<MathContainer />} />
            <Route path='/physmath' element={<Physmath />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
