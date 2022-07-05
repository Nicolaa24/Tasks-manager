class StorageService {
  get(key) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      return undefined;
    }
  }

  set(key, value) {
    const valueToString = JSON.stringify(value);
    localStorage.setItem(key, valueToString);
  }

  delete(key) {
    localStorage.removeItem(key);
  }
}

const storageService = new StorageService();

export { storageService, StorageService };
