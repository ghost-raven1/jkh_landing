import {combineReducers, configureStore} from "@reduxjs/toolkit";
import commonCatalog from './reducers/common/catalog';

const rootReducer = combineReducers({
    commonCatalog
});
export default configureStore({
    reducer: rootReducer,
});
