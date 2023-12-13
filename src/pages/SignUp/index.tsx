import { Link } from '../../components';
import { Auth } from './Auth';
import styles from './SignUp.module.scss';

export function SignUp() {
  return (
    <div className={styles.signup}>
      <div className={styles.signup__wrapper}>
        <div className={styles.signup__container}>
          <div>
            <h4 className={styles.signup__title}>Novo por aqui?</h4>
            <p className={styles.signup__subtitle}>
              Faça seu cadastro para utilizar nossos serviços
            </p>
          </div>

          <Auth />

          <p>
            Já tem uma conta? <Link to='/auth/sign-in'>Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
