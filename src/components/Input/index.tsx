import classNames from 'classnames';
import { ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  id?: string;
  label?: string;
  type?: 'text' | 'email' | 'password';
  required?: boolean;
  fullWidth?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ id, label, type, required, fullWidth, onChange }: InputProps) {
  const className = classNames(styles.input, [{ [styles['input--full-width']]: fullWidth }]);

  return (
    <div className={className}>
      <label htmlFor={id} className={styles.input__label}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input__input}
        type={type}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}
