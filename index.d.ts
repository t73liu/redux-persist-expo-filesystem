declare module "redux-persist-expo-filesystem" {
    const ExpoFileSystemStorage: {
        getItem(key: string): Promise<string>;
        setItem(key: string, value: string): Promise<string>;
        removeItem(key: string): Promise<void>;
    };
    export default ExpoFileSystemStorage
}
