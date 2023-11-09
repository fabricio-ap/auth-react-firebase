import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.scss';

interface LinkProps {
  text: string;
  to?: string;
}

export function Link({ text, to }: LinkProps) {
  return (
    <RouterLink to={to || ''} className={styles.link}>
      {text}
    </RouterLink>
  );
}
