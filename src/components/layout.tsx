import type { FC, ReactNode } from 'react';
import styles from './layout.module.css'

type TestObj = {
	children: ReactNode;
};

const OutputFC: FC<TestObj> = ({ children }) => {
	return (
    <>
      <div className={styles.container}>
        { children }
      </div>
    </>
  )
};

export default OutputFC;
