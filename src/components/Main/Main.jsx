import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Services from "../Services/Services";
import './Main.css'

function Main() {
  return (<>
      <Header/>
    <main className="content">
      <Promo />
      <Services />
    </main>
    <Footer/>
    </>

  );
}

export default Main;