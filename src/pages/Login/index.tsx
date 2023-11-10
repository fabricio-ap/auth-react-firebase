import { useContext } from 'react';
import image from '../../assets/banner.png';
import { Divider, Link, Loading } from '../../components';
import { AuthContext } from '../../context';
import { Auth } from './Auth';
import { CustomAuth } from './CustomAuth';
import styles from './Login.module.scss';

export function Login() {
  const { isLoading } = useContext(AuthContext);

  return (
    <div className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__container}>
          <div className={styles.login__section}>
            <h4 className={styles.login__title}>Bem vindo!</h4>
            <p className={styles.login__text}>Faça login para utilizar nossos serviços</p>
          </div>

          {isLoading && <Loading />}

          {!isLoading && (
            <>
              <CustomAuth />
              <Divider text='ou' />
              <Auth />

              <p className={styles.login__text}>
                Ainda não tem uma conta? <Link text='Criar conta' to='/sign-up' />
              </p>
            </>
          )}
        </div>

        <img src={image} className={styles.login__banner} />
      </div>
    </div>
  );
}
