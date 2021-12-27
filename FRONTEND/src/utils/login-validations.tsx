export function emailValidation(email: string) {
  const regexEmail = /\w+|\d+@\w+\.\w{3}/
  if(email.match(regexEmail)) {
      return true;
  }
  return false;
};

export function passwordValidation(password: string){
  if(password.length > 8 && password.match(/[A-Z]/)){
      return true
  }
  return false
};