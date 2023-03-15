
import {HashRouter,Routes,Route} from"react-router-dom";
import './App.scss';
import ServicesPage from './components/ServicesPage/ServicesPage';
// import Header from '../Header/Header';
// import Main from '../Main/Main';
// import Footer from '../Footer/Footer'

function App() {
  return (

  <HashRouter>
  <Routes>
    <Route path="/" element={<ServicesPage/>}/>
  </Routes>
  </HashRouter>
  );
}

export default App;
