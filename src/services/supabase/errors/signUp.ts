export function errorMessage(errorCode?: string) {
  console.log('error . code: ', errorCode);

  switch (errorCode) {
    case '429':
      return 'Número máximo de tentativas excedido, tente novamente mais tarde.';
    default:
      return 'Não foi possível criar sua conta, tente novamente.';
  }
}

export function errorMessageUpdateUser(errorCode: string) {
  console.log('errorMessageUpdateUser: ', errorCode);

  switch (errorCode) {
    case 'mapear':
      return 'Precisa mapear esse erro.';
    default:
      return 'Não foi possível criar sua conta, tente novamente.';
  }
}
