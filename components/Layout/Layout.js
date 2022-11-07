import { Header } from "../index";
import { Nav } from "../index";

import styles from '../../styles/Layout.module.css'

const Layout = ({ children }) => (
  <>
    <Nav/>
    <div className={styles.container}>
      <main className={styles.main}>
        <Header/>
        {children}
      </main>
    </div>
  </>
)

export default Layout
