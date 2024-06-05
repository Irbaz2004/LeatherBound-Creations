import { ADD_TO_CART, REM_TO_CART, DEL_TO_CART } from "./Constant";

export const AllDATA = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("aaaddd", action);
      return [action.data, ...data];

    case REM_TO_CART:
      const RemainItem=data.filter((item)=>item.id !== action.data);
      data.length = data.length - 1;
      console.log('redcer rem', RemainItem)
      console.log("rem", ...RemainItem);
      return [...RemainItem];

    case DEL_TO_CART:
      data = [];
      return [...data];

    default:
      return data;
  }
};
