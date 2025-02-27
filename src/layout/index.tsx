import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;