export function signInError(errorCode: string) {
  console.log('signInError: ', errorCode);

  switch (errorCode) {
    case 'auth/invalid-credential':
      return 'E-mail e ou senha incorreto.';
    default:
      return 'Não foi possível acessar essa conta, tente novamente.';
  }
}
