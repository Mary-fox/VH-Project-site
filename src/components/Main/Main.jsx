import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Promo from "../Promo/Promo";
import Services from "../Services/Services";
import './Main.scss'

function Main() {
  return (<>
      <Header/>
    <main className="content">
        <Promo />
        <Services />
        <Projects />
    </main>
    <Footer 
    text="Расскажите о вашем проекте"
    subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
    btn="Написать"
    />
    </>

  );
}

export default Main;