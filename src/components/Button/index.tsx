import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit';
  prefix?: string | React.ReactNode;
  color?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export function Button({ label, prefix, type, color, fullWidth, onClick }: ButtonProps) {
  const className = classNames(styles.button, [{ [styles['button--full-width']]: fullWidth }]);

  return (
    <button
      className={className}
      type={type || 'button'}
      onClick={onClick}
      style={{ background: color || '#FFFFFF', color: color && '#FFFFFF' }}
    >
      {prefix && <div className={styles.button__prefix}>{prefix}</div>}
      {label && <div>{label}</div>}
    </button>
  );
}
