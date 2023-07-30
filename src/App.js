import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import RestView from './components/RestView';
import OperatingHours from './components/OperatingHours';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>

        <Routes>

          <Route path='' element={<Home></Home>} />
          <Route path='viewrest/:id' element={<RestView></RestView>} />

        </Routes>


        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
