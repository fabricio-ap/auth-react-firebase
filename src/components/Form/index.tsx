import { ChangeEvent } from 'react';
import { Button, Input } from '..';
import styles from './Form.module.scss';

export enum InputType {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
}

interface FormProps {
  items: {
    label?: string;
    type?: InputType;
    fullWidth?: boolean;
    required?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }[];
  onSubmit?: () => void;
}

export function Form({ items, onSubmit }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit && onSubmit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {items.map((item, index) => (
        <Input key={index} {...item} />
      ))}

      <Button label='Entrar' color='#DC7E40' type='submit' fullWidth />
    </form>
  );
}
