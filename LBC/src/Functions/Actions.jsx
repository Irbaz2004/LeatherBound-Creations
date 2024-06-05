import { ADD_TO_CART,REM_TO_CART,DEL_TO_CART } from "./Constant";


export const ADD=(data)=>{
    console.log('add')
        return{
            type:ADD_TO_CART,
            data
        }
}

export const REM=(data)=>{
    return{
        type:REM_TO_CART,
        data
    }
}

export const DEL=()=>{
    return{
        type:DEL_TO_CART,
        
    }
}