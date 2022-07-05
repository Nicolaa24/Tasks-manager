import { StorageService } from "./storage.service";

class UsersAPI extends StorageService {
  constructor() {
    super();
  }

  isLoggedIn() {
    return this.get("isLoggedIn") ? true : false;
  }

  getUsers() {
    return this.get("users");
  }

  getUser(user) {
    const users = this.getUsers();
    const findUser = users.find(
      (storedUsers) => storedUsers.email === user.email
    );
    return findUser;
  }

  setLoggedIn(payload) {
    this.set("isLoggedIn", payload);
  }

  addNewUser(user) {
    const isUserExists = this.checkUniqueUser(user);
    if (isUserExists) return false;

    const users = this.getUsers();
    if (users) {
      this.set("users", [...users, user]);
    } else {
      this.set("users", [user]);
    }

    return true;
  }

  checkUniqueUser(user) {
    const users = this.getUsers();
    if (!users) return false;
    return users.find((storedUser) => storedUser.email === user.email);
  }

  validateCredentials(user) {
    const getUser = this.getUser(user);
    if (!getUser) return false;
    const isCredentialsValid =
      user.email === getUser.email && user.password === getUser.password;
    return isCredentialsValid;
  }

  logIn(user) {
    const isCredentialsValid = this.validateCredentials(user);
    if (isCredentialsValid) {
      this.set("currentUser", user);
      return true;
    }
    return false;
  }

  logOut() {
    this.delete("currentUser");
  }

  getCurrentUser() {
    return this.get("currentUser");
  }
}

const usersAPI = new UsersAPI();

export { usersAPI };
