import styles from './Divider.module.scss';

interface DividerProps {
  text?: string;
}

export function Divider({ text }: DividerProps) {
  if (!text)
    return (
      <div className={styles.divider}>
        <div className={styles.divider__item} />
      </div>
    );

  return (
    <div className={styles.divider}>
      <div className={styles.divider__item} />
      {text}
      <div className={styles.divider__item} />
    </div>
  );
}
