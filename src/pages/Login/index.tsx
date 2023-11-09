import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/banner.png';
import { Divider, Form, FormItemType, Link } from '../../components';
import { AuthContext } from '../../context';
import { CustomAuth } from './CustomAuth';
import styles from './Login.module.scss';
import { buildFormConfig } from './helpers';

export function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [target.id]: target.value });
  };

  const handleSubmit = async () => {
    signIn(login.email, login.password, redirect);
  };

  const redirect = () => {
    navigate('/');
  };

  const formConfig = buildFormConfig();

  const formItems = formConfig.map((item) => ({
    ...item,
    value: login[item.id as keyof typeof login],
    onChange: handleChange,
  })) as FormItemType[];

  return (
    <div className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__container}>
          <div className={styles.login__section}>
            <h4 className={styles.login__title}>Bem vindo!</h4>
            <p className={styles.login__text}>Faça login para utilizar nossos serviços</p>
          </div>

          <CustomAuth />

          <Divider text='ou' />

          <Form items={formItems} submitText='Entrar' onSubmit={handleSubmit} />

          <p className={styles.login__text}>
            <Link text='Esqueci minha senha' />
          </p>

          <p className={styles.login__text}>
            Ainda não tem uma conta? <Link text='Criar conta' to='/sign-up' />
          </p>
        </div>

        <img src={image} className={styles.login__banner} />
      </div>
    </div>
  );
}
