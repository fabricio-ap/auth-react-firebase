import { ChangeEvent } from 'react';
import { Button, Input } from '..';
import styles from './Form.module.scss';

export type FormItemType = {
  label?: string;
  type?: 'email' | 'password' | 'text';
  fullWidth?: boolean;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

interface FormProps {
  items: FormItemType[];
  submitText?: string;
  onSubmit?: () => void;
}

export function Form({ items, submitText, onSubmit }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit && onSubmit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {items.map((item, index) => (
        <Input key={index} {...item} />
      ))}

      <Button label={submitText} color='#DC7E40' type='submit' fullWidth />
    </form>
  );
}
