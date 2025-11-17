# [Redux-Persist for Expo Filesystem](https://www.npmjs.com/package/redux-persist-expo-filesystem)

Persist redux store to filesystem because of the following android limitation
[#199](https://github.com/rt2zz/redux-persist/issues/199).

Existing filesystem for redux-persist require ejecting of Expo apps due to
react-native linking.

Comes with typescript definitions.

## Compatibility

- v3.0.0 uses the updated `expo-file-system` and is compatible with `expo` 45+.
- v2.0.2 imports from `expo-file-system` unimodule and is compatible with `expo`
  34 to 44 (inclusive).
- v1.0.1 imports from `expo` and is compatible with `expo` 27 to 33 (inclusive).

## Setup

1. Install `redux-persist-expo-filesystem`.
1. Make sure `expo` is a peer dependency.
1. Sample usage below:

```javascript
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
};
const store = createStore(persistReducer(persistConfig, rootReducer));
```
