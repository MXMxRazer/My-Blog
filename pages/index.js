import NavBar from '../components/navBar';
import styles from '../src/sass/SassComponents/index.module.css';
import Hero from '../components/hero';
import HTML from '../components/HTML/basicHTML';
import TitleChanger from '../components/titleChanger/titleChanger';

export default function Home() {

  const title = "Home";

  TitleChanger({
    title: title
  })

  return (
    <HTML>
      <Hero />
    </HTML>
  )
}