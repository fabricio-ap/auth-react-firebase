import styles from './Link.module.scss';

interface LinkProps {
  text: string;
  to?: string;
}

export function Link({ text, to }: LinkProps) {
  return (
    <a href={to} className={styles.link}>
      {text}
    </a>
  );
}
