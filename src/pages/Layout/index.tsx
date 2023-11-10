import { useContext } from 'react';
import { PiSignOutBold } from 'react-icons/pi';
import { AuthContext } from '../../context';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { signOut } = useContext(AuthContext);

  return (
    <div>
      <header className={styles.header}>
        <h3 className={styles.header__title}>Auth React Firebase</h3>

        <div className={styles.header__actions}>
          <PiSignOutBold className={styles.header__action} onClick={signOut} />
        </div>
      </header>

      <div className={styles.outlet}>{children}</div>
    </div>
  );
}
