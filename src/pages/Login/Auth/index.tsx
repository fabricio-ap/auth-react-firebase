import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { Alert, Button, Input } from '../../../components';
import { AuthContext } from '../../../context';
import styles from './Auth.module.scss';

export function Auth() {
  const [user, setLogin] = useState({
    email: '',
    password: '',
  });

  const { error, isLoading, signIn } = useContext(AuthContext);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...user, [target.id]: target.value });
  };

  const handleSubmit = (event: FormEvent) => {
    signIn(user);
    event.preventDefault();
  };

  return (
    <>
      {error && <Alert type='error'>{error.message}</Alert>}

      <form className={styles.auth} onSubmit={handleSubmit}>
        <Input
          id='email'
          label='E-mail'
          placeholder='Digite seu e-mail'
          type='email'
          value={user.email}
          required
          fullWidth
          onChange={handleChange}
        />

        <Input
          id='password'
          label='Senha'
          placeholder='Digite sua senha'
          type='password'
          value={user.password}
          required
          fullWidth
          onChange={handleChange}
        />

        <div className={styles.auth__submit}>
          <Button type='submit' color='primary' disabled={isLoading} fullWidth>
            Entrar
          </Button>
        </div>
      </form>
    </>
  );
}
