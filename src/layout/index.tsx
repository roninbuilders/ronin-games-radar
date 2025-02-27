import Navbar from './Navbar';
import Footer from './Footer';
import styles from "./index.module.css";

const Layout = (props) => {
  return (
    <div class={styles.mainContainer} >
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;