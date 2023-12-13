import classNames from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import styles from './Button.module.scss';

enum ButtonColor {
  primary = '#DC7E40',
  onPrimary = '#FFFFFF',
}

interface ButtonProps {
  children?: ReactNode;
  type?: 'button' | 'submit';
  icon?: ReactNode;
  color?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  type = 'button',
  color,
  icon,
  fullWidth,
  disabled,
  onClick,
}: ButtonProps) {
  const className = classNames(styles.button, { [styles['button--full']]: fullWidth });

  const customStyle: CSSProperties = {
    background: ButtonColor.primary,
    color: ButtonColor.onPrimary,
  };

  return (
    <button
      className={className}
      type={type}
      style={color && customStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}
