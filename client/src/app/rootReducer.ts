import authReducer from '@/features/auth/AuthSlice';
import { combineReducers } from 'redux';
import appReducer from './AppSlice';
import categoriesReducer from './Products/categoriesSlice';
import productReducer from './Products/productSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    categories: categoriesReducer,
    product: productReducer,
    // ...other reducers
});

export default rootReducer;
