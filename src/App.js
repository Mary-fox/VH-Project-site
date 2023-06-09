
import {HashRouter,Routes,Route} from"react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import './App.scss';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Main from './components/Main/Main';
import CareerPage from "./components/CareerPage/CareerPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import PublicationsPage from "./components/PublicationsPage/PublicationsPage";
import TeamPage from "./components/TeamPage/TeamPage"
import ArticlePage from "./components/PublicationsPage/ArticlePage/ArticlePage";
import { articles } from './datas/articles';
import ContactsPage from "./components/ContactsPage/ContactsPage";
import PromotionPage from "./components/PromotionPage/PromotionPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import WebDevelopmentPage from "./components/WebDevelopmentPage/WebDevelopmentPage";
import AnalyticsPage from "./components/AnalyticsPage/AnalyticsPage";
import IllustrationsPage from "./components/IllustraitionsPage/IllustrationsPage";

function App() {
  return (

  <HashRouter>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Main/>}  exact/>
    <Route path="/services" element={<ServicesPage/>}/>
    <Route path="/career" element={<CareerPage/>}/>
    <Route path="/projects" element={<ProjectsPage/>}/>
    <Route path="/publications" element={<PublicationsPage/>}/>
    <Route path="/team" element={<TeamPage/>}/>
    <Route path="/publications/:id" element={<ArticlePage articles={articles} />} />
    <Route path="/contacts" element={<ContactsPage/>} />
    <Route path="/promotion" element={<PromotionPage/>} />
    <Route path="/webdevelopment" element={<WebDevelopmentPage/>} />
    <Route path="/analytics" element={<AnalyticsPage/>} />
    <Route path="/illustrations" element={<IllustrationsPage />} />
    <Route path="*" element={<ErrorPage />} />
    
  </Routes>
  </HashRouter>
  );
}

export default App;
