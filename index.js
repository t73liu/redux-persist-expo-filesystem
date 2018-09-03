import {FileSystem} from "expo";

function generateFolderPath() {
    return FileSystem.documentDirectory + "appData/";
}

function generateFilePath(key) {
    const fileName = key.replace(/[^a-z0-9.\-_]/gi, "-");
    return generateFolderPath() + fileName;
}

function writeFile(path, value) {
    FileSystem.writeAsStringAsync(generateFilePath(key), value);
}

const ExpoFileSystemStorage = {
    getItem(key) {
        return FileSystem.readAsStringAsync(generateFilePath(key));
    },
    setItem(key, value) {
        const folderPath = generateFolderPath();
        return FileSystem.getInfoAsync(folderPath)
            .then(info => {
                const filePath = generateFilePath(key);
                if (info.exists) {
                    writeFile(filePath, value);
                } else {
                    FileSystem.makeDirectoryAsync(folderPath, {intermediates: true})
                        .then(() => writeFile(filePath, value));
                }
            });
    },
    removeItem(key) {
        return FileSystem.deleteAsync(generateFilePath(key), {idempotent: true});
    }
};

export default ExpoFileSystemStorage;
