import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Input } from '../../../components';
import { AuthContext } from '../../../context';
import { validatePassword } from '../helpers';
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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const isValidPassword = validatePassword(user.password, user.confirm);

    if (!isValidPassword) return setIsValid(false);

    setIsValid(true);
    signUp(user, redirect);
  };

  const redirect = () => {
    navigate('/auth/sign-in');
  };

  return (
    <>
      {error && <Alert type='error'>{error.message}</Alert>}
      {!isValid && <Alert type='warning'>As senhas precisam ser iguais</Alert>}

      <form className={styles.auth} onSubmit={handleSubmit}>
        <Input
          id='firstName'
          label='Nome'
          placeholder='Digite seu nome'
          type='text'
          value={user.firstName}
          onChange={handleChange}
          fullWidth
        />

        <Input
          id='lastName'
          label='Sobrenome'
          placeholder='Digite seu sobrenome'
          type='text'
          value={user.lastName}
          onChange={handleChange}
          fullWidth
        />

        <Input
          id='email'
          label='E-mail'
          placeholder='Digite seu e-mail'
          type='email'
          value={user.email}
          onChange={handleChange}
          required
          fullWidth
        />

        <Input
          id='password'
          label='Senha'
          placeholder='Digite sua senha'
          type='password'
          value={user.password}
          onChange={handleChange}
          required
          fullWidth
        />

        <Input
          id='confirm'
          label='Confirmar senha'
          placeholder='Confirme sua senha'
          type='password'
          value={user.confirm}
          onChange={handleChange}
          required
          fullWidth
        />

        <div className={styles.auth__submit}>
          <Button type='submit' color='primary' fullWidth>
            Cadastrar
          </Button>
        </div>
      </form>
    </>
  );
}
