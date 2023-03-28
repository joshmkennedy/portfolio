import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Josh Kennedy
      <small className={Styles.byline}>🚀 Built with 💜 and Astro</small>
    </footer>
  );
}
export default Footer;
