
import {BrowserRouter,Routes,Route} from"react-router-dom";
import './App.scss';
import ServicesPage from '../ServicesPage/ServicesPage';
// import Header from '../Header/Header';
// import Main from '../Main/Main';
// import Footer from '../Footer/Footer'

function App() {
  return (

  <BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<MainPage/>}/> */}
    <Route path="/" element={<ServicesPage />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
