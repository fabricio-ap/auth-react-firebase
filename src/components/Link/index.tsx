import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.scss';

interface LinkProps {
  children: ReactNode;
  to: string;
}

export function Link({ children, to }: LinkProps) {
  return (
    <RouterLink to={to} className={styles.link}>
      {children}
    </RouterLink>
  );
}
