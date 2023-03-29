
import {HashRouter,Routes,Route} from"react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import './App.scss';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Main from './components/Main/Main';
import CareerPage from "./components/CareerPage/CareerPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import PublicationsPage from "./components/PublicationsPage/PublicationsPage";
// import Article from "./components/PublicationsPage/Article/Article";
import TeamPage from "./components/TeamPage/TeamPage"
import ArticlePage from "./components/ArticlePage/ArticlePage";
import { articles } from './articles';

function App() {
  return (

  <HashRouter>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/services" element={<ServicesPage/>}/>
    <Route path="/career" element={<CareerPage/>}/>
    <Route path="/projects" element={<ProjectsPage/>}/>
    <Route path="/publications" element={<PublicationsPage/>}/>
    <Route path="/team" element={<TeamPage/>}/>
    <Route path="/publications/:id" element={<ArticlePage articles={articles} />} />
  </Routes>
  </HashRouter>
  );
}

export default App;
