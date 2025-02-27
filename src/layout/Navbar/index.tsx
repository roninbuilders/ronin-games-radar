import { createSignal } from "solid-js";
import styles from "./index.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  return (
    <nav class={styles.navbar}>
      <div class={styles.container}>
        <a href="/" class={styles.logo}>
        <img src="/ronin_blue.svg" alt="Logo" />
          Ronin Games Radar
        </a>
        <button class={styles.menuButton} onClick={() => setMenuOpen(!menuOpen())}>
          ☰
        </button>
        <ul class={`${styles.navLinks} ${menuOpen() ? styles.show : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/games">Games</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
