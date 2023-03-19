import type { FC, ReactNode } from 'react';
import styles from './layout.module.css'
import Header from './header'

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
    </>
  )
};

export default Layout;
