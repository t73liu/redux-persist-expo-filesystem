import { Directory, File, Paths } from "expo-file-system";

function getAppDataDir() {
  return new Directory(Paths.document, "appData");
}

function getFile(key) {
  const fileName = key.replace(/[^a-z0-9.\-_]/gi, "-");
  return new File(getAppDataDir(), fileName);
}

const ExpoFileSystemStorage = {
  getItem(key) {
    const file = getFile(key);
    // TODO: Confirm that non-existent key behavior is the same as before.
    if (!file.exists) {
      return Promise.resolve(null);
    }
    return file.text();
  },
  setItem(key, value) {
    const appDataDir = getAppDataDir();
    if (!appDataDir.exists) {
      appDataDir.create({
        intermediates: true,
      });
    }
    const file = getFile(key);
    if (!file.exists) {
      file.create();
    }
    // TODO: Confirm that File.write has no performance difference compared to
    // FileSystem.writeAsStringAsync.
    file.write(value);
    // Returns an empty promise to maintain existing API.
    return Promise.resolve();
  },
  removeItem(key) {
    const file = getFile(key);
    if (file.exists) {
      file.delete();
    }
    // Returns an empty promise to maintain existing API.
    return Promise.resolve();
  },
};

export default ExpoFileSystemStorage;
