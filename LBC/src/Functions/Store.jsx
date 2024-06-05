import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import createSagaMiddleware from 'redux-saga';
import ProductSaga from "./Productsaga";


const sagaMiddle=createSagaMiddleware();
 export const store = configureStore(
    {
       reducer: RootReducer,
        middleware:()=>[sagaMiddle]
    
    }
    
);
sagaMiddle.run(ProductSaga)