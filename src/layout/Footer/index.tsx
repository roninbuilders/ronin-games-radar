import styles from "./index.module.css";
import { FaBrandsDiscord, FaBrandsTwitter, FaBrandsGithub } from "solid-icons/fa";

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <div class={styles.links}>
          <a href="https://discord.gg/3TS9zD7n" target="_blank" rel="noopener noreferrer">
            <FaBrandsDiscord size={24} />
          </a>
          <a href="https://x.com/ronin_builders" target="_blank" rel="noopener noreferrer">
            <FaBrandsTwitter size={24} />
          </a>
          <a href="https://github.com/roninbuilders" target="_blank" rel="noopener noreferrer">
            <FaBrandsGithub size={24} />
          </a>
        </div>
        <div class={styles.donation}>
          <span>Donate: roninbuilders.ron</span>
        </div>
        <p class={styles.copy}>© {new Date().getFullYear()} Ronin Builders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
