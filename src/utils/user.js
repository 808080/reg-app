import { addUser, setCurrentUser, getCurrentUser, checkUser, getUserByEmail, updatePass } from './mockDB';

const signUp = (values) =>
  new Promise((resolve, reject) => {
    const user = getUserByEmail(values.email);
    if (user) return reject(new Error('Occupied email'));
    addUser(values);
    setCurrentUser(values);
    setTimeout(() => {
      resolve(values);
    }, 100);
  });

const signIn = (values) =>
  new Promise((resolve, reject) => {
    const user = checkUser(values);
    setTimeout(() => {
      user ? resolve(user) : reject(new Error('Invalid email or password'));
    }, 100);
  });

const getUser = () =>
  new Promise((resolve, reject) => {
    const user = getCurrentUser();
    setTimeout(() => {
      resolve(user);
    }, 100);
  });

const logOut = () =>
  new Promise((resolve, reject) => {
    setCurrentUser(null);
    setTimeout(() => {
      resolve('ok');
    }, 100);
  });

const changePassword = (values) =>
  new Promise((resolve, reject) => {
    const newPass = values.password;
    const oldPass = values.prev;
    const user = getCurrentUser();
    if(user.password !== oldPass) return reject(new Error('Invalid old password'));
    updatePass(user.email, newPass);
    setTimeout(() => resolve('Password was changed'), 100);
  });


export {
  signUp,
  signIn,
  getUser,
  logOut,
  changePassword,
};