import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Button.module.scss';

enum ButtonColor {
  primary = 'bg-primary',
  secondary = 'bg-secondary',
  ghost = 'bg-ghost',
}

interface ButtonProps {
  children?: ReactNode;
  type?: 'button' | 'submit';
  icon?: ReactNode;
  color?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  type = 'button',
  color = 'ghost',
  icon,
  fullWidth,
  onClick,
}: ButtonProps) {
  const className = classNames(
    styles.button,
    'flex align-center',
    'justify-center',
    'px-3 py-1.5',
    'rounded-lg',
    'border border-border',
    'ease-in-out duration-300',
    {
      ['w-full']: fullWidth,
      [ButtonColor[color]]: color,
      [`text-onPrimary`]: color === 'primary',
    },
  );

  return (
    <button className={className} type={type} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
}
