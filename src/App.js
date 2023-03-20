
import {HashRouter,Routes,Route} from"react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import './App.scss';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Main from './components/Main/Main';
import CareerPage from "./components/CareerPage/CareerPage";

function App() {
  return (

  <HashRouter>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/services" element={<ServicesPage/>}/>
    <Route path="/career" element={<CareerPage/>}/>
  </Routes>
  </HashRouter>
  );
}

export default App;
