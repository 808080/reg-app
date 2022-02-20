const USERS_STORAGE_NAME = 'users';
const usersStore = {
  get: () => JSON.parse(localStorage.getItem(USERS_STORAGE_NAME)),
  set: (users) => localStorage.setItem(USERS_STORAGE_NAME, JSON.stringify(users))
};

export const getUsers = () => usersStore.get() || [];

export const addUser = (user) => {
  const users = getUsers();
  users.push(user);
  usersStore.set(users);
  return user;
};

export const getUserByEmail = (email) => getUsers().find((u) => u.email === email);

export const checkUser = (u1) => getUsers().find((u2) => (u1.email === u2.email && u1.password === u2.password));

export const updatePass = (email, pass) => {
  const users = getUsers();
  const index = users.findIndex(u => u.email === email);
  users[index].password = pass;
  usersStore.set(users);
};

const CURRENT_USER_STORAGE_NAME = 'current-users';
const currentUserStore = {
  get: () => JSON.parse(localStorage.getItem(CURRENT_USER_STORAGE_NAME)),
  set: (user) => localStorage.setItem(CURRENT_USER_STORAGE_NAME, JSON.stringify(user))
};

export const setCurrentUser = (user) => currentUserStore.set(user);
export const getCurrentUser = () => currentUserStore.get();