import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Form, FormItemType, Link } from '../../../components';
import { AuthContext } from '../../../context';
import { buildFormConfig, validatePassword } from '../helpers';
import styles from './Auth.module.scss';

export function Auth() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirm: '',
    firstName: '',
    lastName: '',
  });
  const [isValid, setIsValid] = useState(true);

  const { error, signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [target.id]: target.value });
  };

  const handleSubmit = () => {
    const isValidPassword = validatePassword(user.password, user.confirm);
    if (!isValidPassword) return setIsValid(isValidPassword);
    signUp(user, redirect);
  };

  const redirect = () => {
    setIsValid(true);
    navigate('/login');
  };

  const formConfig = buildFormConfig();

  const formItems = formConfig.map((item) => ({
    ...item,
    value: user[item.id as keyof typeof user],
    onChange: handleChange,
  })) as FormItemType[];

  return (
    <>
      {error && error.type === 'SIGN-UP' && <Alert message={error?.message} type='error' />}

      {!isValid && (
        <Alert message='A confirmação da senha está diferente da senha' type='warning' />
      )}

      <Form items={formItems} submitText='Cadastrar' onSubmit={handleSubmit} />

      <p className={styles.auth__text}>
        Já tem uma conta? <Link text='Entrar na minha conta' to='/login' />
      </p>
    </>
  );
}
