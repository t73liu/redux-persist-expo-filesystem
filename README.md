# Redux-Persist for Expo Filesystem

Persist redux store to filesystem because of the following android limitation [#199](https://github.com/rt2zz/redux-persist/issues/199)

Existing filesystem for redux-persist require ejecting of CRNA/Expo apps due to react-native linking.

Comes with typescript definitions.

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

## Compatibility

Confirmed with expo 29.0.0 and redux-persist 5.10.0
