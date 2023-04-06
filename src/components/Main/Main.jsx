import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Offer from "../Offer/Offer";
import Partners from "../Partners/Partners";
import Projects from "../Projects/Projects";
import Promo from "../Promo/Promo";
import Publications from "../Publications/Publications";
import Services from "../Services/Services";
import './Main.scss'
import { useState } from "react";


function Main() {
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  return (<>

   <Header  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
    <main className="content">
        <Promo />
        <Services />
        <Projects />
        <Partners  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
        <Publications />
    </main>
    <Footer  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
    text="Расскажите о вашем проекте"
    subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
    btn="Написать"
    />


    </>

  );
}

export default Main;