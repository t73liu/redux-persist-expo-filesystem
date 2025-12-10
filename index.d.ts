declare module "redux-persist-expo-filesystem" {
  const ExpoFileSystemStorage: {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
  };
  export default ExpoFileSystemStorage;
}
