import { AiOutlineGoogle } from 'react-icons/ai';
import { Button } from '..';
import styles from './GoogleAuth.module.scss';

export function GoogleAuth() {
  return (
    <div className={styles.google}>
      <p>Fazer login com:</p>
      <Button icon={<AiOutlineGoogle size='18px' />} fullWidth />
    </div>
  );
}
