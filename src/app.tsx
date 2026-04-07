import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import Portfolio from "./portifoilo";
import Services from "./services";
import Skills from "./skills";

export default function App() {
  return (
    <div className={``}>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}