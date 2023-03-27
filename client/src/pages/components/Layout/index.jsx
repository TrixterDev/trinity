import styles from "./style.module.scss";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.home}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
