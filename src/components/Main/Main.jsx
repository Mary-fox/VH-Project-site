import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Offer from "../Offer/Offer";
import Partners from "../Partners/Partners";
import Projects from "../Projects/Projects";
import Promo from "../Promo/Promo";
import Publications from "../Publications/Publications";
import Services from "../Services/Services";
import './Main.scss'



function Main() {

  return (<>

   <Header/>
    <main className="content">
        <Promo />
        <Services />
        <Projects />
        <Partners />
        <Publications />
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