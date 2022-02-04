import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FinanceContainer from './components/finance/financeContainer';
import MathContainer from './components/math/mathContainer';
import Health from './components/health/health';
import HealthContainer from './components/health/healthContainer';
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
            <Route path='/health' element={<HealthContainer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
