import { compose, createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart','product']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== "production" && window & window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
