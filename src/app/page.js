import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About"
import Counter from "./components/Counter"
import Services from "./components/Services";
import Testimonial from "./components/Testimonials";
import Industries from "./components/Industries";
import ClientSection from "./components/Clients";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <About />
      <Counter />
      <Services />
      <Testimonial />
      <Industries />
      <ClientSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
