export function buildFormConfig() {
  return [
    {
      id: 'email',
      label: 'Endereço de email',
      type: 'email',
      fullWidth: true,
      required: true,
    },
    {
      id: 'password',
      label: 'Senha',
      type: 'password',
      fullWidth: true,
      required: true,
    },
    {
      id: 'confirm',
      label: 'Confirme sua senha',
      type: 'password',
      fullWidth: true,
      required: true,
    },
  ];
}

export function validatePassword(password: string, confirm: string) {
  return password === confirm;
}
