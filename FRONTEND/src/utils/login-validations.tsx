export function emailValidation( email: string ) {
  const regexEmail = /\w+|\d+@\w+\.\w{3}/
  if(email.match(regexEmail)) {
    return true;
  }
  return false;
};

export function passwordValidation( password: string ) {
  if(password.length > 8){
      return true
  }
  return false
};

export function userValidations ( email: string, password: string ) : boolean {
  return emailValidation(email) && passwordValidation(password);
}