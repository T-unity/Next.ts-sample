import type { FC, ReactNode } from 'react';
import styles from './layout.module.css'
import Header from './header'
import Footer from './footer'

type TestObj = {
	children: ReactNode;
};

const Layout: FC<TestObj> = ({ children }) => {
	return (
    <>
      <Header />
      <div className={styles.container}>
        { children }
      </div>
      <Footer />
    </>
  )
};

export default Layout;
