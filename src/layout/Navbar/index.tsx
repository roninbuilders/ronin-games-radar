import styles from "./index.module.css";

const Navbar = () => {
  return (
    <nav class={styles.navbar}>
      <div class={styles.container}>
        <a href="/" class={styles.logo}>
        <img src="/ronin_blue.svg" alt="Logo" />
          Ronin Games Radar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
