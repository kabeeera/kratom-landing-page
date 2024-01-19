import About from "./components/sections/about";
import Categories from "./components/sections/categories";
import Hero from "./components/sections/hero";
import Testimonials from "./components/sections/testimonials";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Categories />
      <Testimonials />
    </main>
  );
}
