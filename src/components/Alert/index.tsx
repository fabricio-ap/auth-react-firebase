import classNames from 'classnames';
import styles from './Alert.module.scss';

interface AlertProps {
  message?: string;
  type: 'success' | 'warning' | 'error';
}

export function Alert({ message, type = 'success' }: AlertProps) {
  const className = classNames(styles.alert, styles[`alert--${type}`]);

  return <div className={className}>{message}</div>;
}
