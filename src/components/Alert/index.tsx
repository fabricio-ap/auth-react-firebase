import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Alert.module.scss';

enum AlertEnum {
  success = 'alert--success',
  warning = 'alert--warning',
  error = 'alert--error',
}

interface AlertProps {
  children?: ReactNode;
  type?: 'success' | 'warning' | 'error';
}

export function Alert({ children, type = 'success' }: AlertProps) {
  const className = classNames(styles.alert, styles[AlertEnum[type]]);

  return <div className={className}>{children}</div>;
}
