import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/banner.png';
import { Alert, Form, FormItemType, Link } from '../../components';
import { AuthContext } from '../../context';
import styles from './SignUp.module.scss';
import { buildFormConfig, validatePassword } from './helpers';

export function SignUp() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirm: '',
    firstName: '',
    lastName: '',
  });

  const [isValid, setIsValid] = useState(true);

  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [target.id]: target.value });
  };

  const handleSubmit = () => {
    const isValidPassword = validatePassword(user.password, user.confirm);

    if (!isValidPassword) return setIsValid(isValidPassword);

    signUp(user, redirect);
  };

  const redirect = () => {
    setIsValid(true);
    navigate('/login');
  };

  const formConfig = buildFormConfig();

  const formItems = formConfig.map((item) => ({
    ...item,
    value: user[item.id as keyof typeof user],
    onChange: handleChange,
  })) as FormItemType[];

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

          {!isValid && (
            <Alert message='A confirmação da senha está diferente da senha' type='warning' />
          )}

          <Form items={formItems} submitText='Cadastrar' onSubmit={handleSubmit} />

          <p className={styles.signup__text}>
            Já tem uma conta? <Link text='Entrar na minha conta' to='/login' />
          </p>
        </div>
      </div>
    </div>
  );
}
