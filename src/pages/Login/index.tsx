import { Divider, GoogleAuth, Link } from '../../components';
import { Auth } from './Auth';
import styles from './Login.module.scss';

export function Login() {
  return (
    <div className={styles.signin}>
      <div className={styles.signin__wrapper}>
        <div className={styles.signin__container}>
          <div>
            <h4 className={styles.signin__title}>Bem vindo!</h4>
            <p className={styles.signin__subtitle}>Faça login para utilizar nossos serviços</p>
          </div>

          <GoogleAuth />
          <Divider text='ou' />
          <Auth />
          <Link to='#'>Esqueci minha senha</Link>

          <p>
            Ainda não tem uma conta? <Link to='/auth/sign-up'>Criar conta</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
