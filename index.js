import * as FileSystem from "expo-file-system";

function generateFolderPath() {
    return FileSystem.documentDirectory + "appData/";
}

function generateFilePath(key) {
    const fileName = key.replace(/[^a-z0-9.\-_]/gi, "-");
    return generateFolderPath() + fileName;
}

async function writeFile(path, value) {
    await FileSystem.writeAsStringAsync(path, value);
}

const ExpoFileSystemStorage = {
    getItem(key) {
        return FileSystem.readAsStringAsync(generateFilePath(key));
    },
    setItem(key, value) {
        const folderPath = generateFolderPath();
        return FileSystem.getInfoAsync(folderPath)
            .then(async info => {
                const filePath = generateFilePath(key);
                if (info.exists) {
                    await writeFile(filePath, value);
                } else {
                    await FileSystem.makeDirectoryAsync(folderPath, {intermediates: true})
                        .then(() => writeFile(filePath, value));
                }
            });
    },
    removeItem(key) {
        return FileSystem.deleteAsync(generateFilePath(key), {idempotent: true});
    }
};

export default ExpoFileSystemStorage;
