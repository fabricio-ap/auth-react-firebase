import { ChangeEvent, useContext, useState } from 'react';
import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/banner.png';
import { Button, Divider, Form, Link } from '../../components';
import { AuthContext } from '../../context';
import styles from './Login.module.scss';
import { buildFormConfig } from './helpers';

// const provider = new GoogleAuthProvider();

export function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [target.id]: target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    signIn(login.email, login.password, loginRedirect);
  };

  const loginRedirect = () => {
    setIsLoading(false);
    navigate('/');
  };

  const formConfig = buildFormConfig().map((item) => ({
    ...item,
    value: login[item.id as keyof typeof login],
    onChange: handleChange,
  }));

  return (
    <div className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__container}>
          <div>
            <h4 className={styles.login__title}>Bem vindo!</h4>
            <p>Faça login para utilizar nossos serviços</p>
          </div>

          <div className={styles.login__container}>
            <p>Fazer login com:</p>
            <div className={styles.login__group}>
              <Button prefix={<AiOutlineGoogle />} fullWidth />
              <Button prefix={<AiOutlineGithub />} fullWidth />
            </div>
          </div>
          <Divider text='Ou continue com' />
          <Form items={formConfig} onSubmit={handleSubmit} />
          <div>
            <p>
              <Link text='Esqueci minha senha' />
            </p>
            <p>
              Ainda não tem uma conta? <Link text='Criar conta' />
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__container}>
          {isLoading && <p>Carregando...</p>}

          {!isLoading && (
            <>
              <div className={styles.login__box}>
                <h4 className={styles.login__title}>Bem vindo!</h4>
                <p className={styles.login__text}>Faça login para utilizar nossos serviços</p>
              </div>

              <div className={styles.login__box}>
                <p className={styles.login__text}>Fazer login com:</p>
                <div className={styles.login__auth}>
                  <div className={styles.login__box}>
                    <Button prefix={<AiOutlineGoogle />} />
                  </div>
                  <div className={styles.login__box}>
                    <Button prefix={<AiOutlineGithub />} />
                  </div>
                </div>
              </div>

              <Divider text='Ou continue com' />

              <Form items={formConfig} onSubmit={handleSubmit} />

              <div className={styles.login__box}>
                <div className={styles.login__text}></div>
                <div className={styles.login__text}>
                  <span>Ainda não tem uma conta?</span> <Link text='Criar conta' />
                </div>
              </div>
            </>
          )}
        </div>

        <img src={image} className={styles.login__banner} />
      </div>
    </div>
  );
}
