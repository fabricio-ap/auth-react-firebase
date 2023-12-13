import { ReactNode, useContext } from 'react';
import { PiSignOutBold } from 'react-icons/pi';
import { Button } from '..';
import { AuthContext } from '../../context';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { signOut } = useContext(AuthContext);

  return (
    <div>
      <header className={styles.header}>
        <h3 className={styles.header__title}>Auth React Firebase</h3>

        <div className={styles.header__actions}>
          <Button icon={<PiSignOutBold />} onClick={signOut} />
        </div>
      </header>

      <div className={styles.outlet}>{children}</div>
    </div>
  );
}
