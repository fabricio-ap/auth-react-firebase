import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Form, FormItemType, Link } from '../../../components';
import { AuthContext } from '../../../context';
import { buildFormConfig } from '../helpers';
import styles from './Auth.module.scss';

export function Auth() {
  const [user, setLogin] = useState({
    email: '',
    password: '',
  });

  const { error, signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...user, [target.id]: target.value });
  };

  const handleSubmit = async () => {
    signIn(user, redirect);
  };

  const redirect = () => {
    navigate('/');
  };

  const formConfig = buildFormConfig();

  const formItems = formConfig.map((item) => ({
    ...item,
    value: user[item.id as keyof typeof user],
    onChange: handleChange,
  })) as FormItemType[];

  return (
    <>
      {error && error.type === 'SIGN-IN' && <Alert message={error.message} type='error' />}

      <Form items={formItems} submitText='Entrar' onSubmit={handleSubmit} />

      <p className={styles.auth__text}>
        <Link text='Esqueci minha senha' />
      </p>
    </>
  );
}
