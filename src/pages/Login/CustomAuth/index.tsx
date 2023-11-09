import { AiOutlineGoogle } from 'react-icons/ai';
import { Button } from '../../../components';
import styles from './CustomAuth.module.scss';

export function CustomAuth() {
  return (
    <div className={styles.auth}>
      <p className={styles.auth__title}>Fazer login com:</p>
      <div className={styles.auth__group}>
        <Button prefix={<AiOutlineGoogle />} fullWidth />
      </div>
    </div>
  );
}
