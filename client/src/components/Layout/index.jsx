import styles from "./style.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import BreadCrumps from "../ui/BreadCrumps";
import EndSiteBlocks from "../EndSiteBlocks";

const Layout = ({ children }) => {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        {children}
        <EndSiteBlocks />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
