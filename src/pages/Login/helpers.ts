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
  ];
}
