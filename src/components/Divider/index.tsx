import styles from './Divider.module.scss';

interface DividerProps {
  text?: string;
}

export function Divider({ text }: DividerProps) {
  if (!text)
    return (
      <div className={styles.divider}>
        <div className={styles.divider__line} />
      </div>
    );

  return (
    <div className={styles.divider}>
      <div className={styles.divider__line} />
      <span className={styles.divider__text}>{text}</span>
      <div className={styles.divider__line} />
    </div>
  );
}
