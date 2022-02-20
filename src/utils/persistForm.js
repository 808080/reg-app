const SIGNUP_STORAGE_NAME = 'signup-form';
export const signupStore = {
  get: () => JSON.parse(localStorage.getItem(SIGNUP_STORAGE_NAME)),
  set: (vals) => localStorage.setItem(SIGNUP_STORAGE_NAME, JSON.stringify(vals))
};

const SIGNIN_STORAGE_NAME = 'signin-form';
export const signinStore = {
  get: () => JSON.parse(localStorage.getItem(SIGNIN_STORAGE_NAME)),
  set: (vals) => localStorage.setItem(SIGNIN_STORAGE_NAME, JSON.stringify(vals))
};