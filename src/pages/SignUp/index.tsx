import { useContext } from 'react';
import image from '../../assets/banner.png';
import { Loading } from '../../components';
import { AuthContext } from '../../context';
import { Auth } from './Auth';
import styles from './SignUp.module.scss';

export function SignUp() {
  const { isLoading } = useContext(AuthContext);

  return (
    <div className={styles.signup}>
      <div className={styles.signup__wrapper}>
        <img src={image} className={styles.signup__banner} />

        <div className={styles.signup__container}>
          <div className={styles.signup__section}>
            <h4 className={styles.signup__title}>Olá!</h4>
            <p className={styles.signup__text}>
              Crie uma conta e descubra um mundo novo com as nossas ferramentas
            </p>
          </div>

          {isLoading && <Loading />}

          {!isLoading && <Auth />}
        </div>
      </div>
    </div>
  );
}
