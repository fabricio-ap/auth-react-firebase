import { InputType } from '../../components';

export function buildFormConfig() {
  return [
    {
      id: 'email',
      label: 'Endereço de email',
      type: InputType.EMAIL,
      fullWidth: true,
      required: true,
    },
    {
      id: 'password',
      label: 'Senha',
      type: InputType.PASSWORD,
      fullWidth: true,
      required: true,
    },
  ];
}
