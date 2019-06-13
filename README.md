# [Redux-Persist for Expo Filesystem](https://www.npmjs.com/package/redux-persist-expo-filesystem)

Persist redux store to filesystem because of the following android limitation [#199](https://github.com/rt2zz/redux-persist/issues/199)

Existing filesystem for redux-persist require ejecting of Expo apps due to react-native linking.

Comes with typescript definitions.

## Compatibility

- v2.0.0 imports from `expo-file-system` unimodule and is compatible with `expo` >= 33 or `expo-file-system` >= 5
- v1.0.1 imports from `expo` and is compatible with `expo` 27 to 33 (inclusive)

## Setup

1. Install: yarn add redux-persist-expo-filesystem
1. Make sure expo is a peer dependency
1. Usage below:

```javascript
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"
const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage
};
const store = createStore(
  persistReducer(persistConfig, rootReducer)
);
```
