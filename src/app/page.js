import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <section className="hero is-light is-bold is-fullheight">
      <Header />
      <Content />
      <Footer />
    </section>
  );
}
