import classNames from 'classnames';
import { ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  value?: string;
  required?: boolean;
  fullWidth?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  id,
  label,
  placeholder,
  type = 'text',
  value,
  required,
  fullWidth,
  onChange,
}: InputProps) {
  const className = classNames(styles.input, [{ [styles['input--full']]: fullWidth }]);

  return (
    <label className={className}>
      <div className={styles.input__label}>
        <span>{label}</span>
      </div>
      <input
        id={id}
        className={styles.input__control}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );

  return (
    <label className={className}>
      <div className='label'>
        <span className='label-text text-neutral'>{label}</span>
      </div>
      <input
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        className='input input-bordered input-sm w-full py-4 bg-white text-base focus:border-transparent'
        required={required}
        onChange={onChange}
      />
    </label>
  );
}
