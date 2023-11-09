import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className={styles.header}>
        <h3 className={styles.header__title}>Auth React Firebase</h3>
      </header>

      <div className={styles.outlet}>{children}</div>
    </div>
  );
}
