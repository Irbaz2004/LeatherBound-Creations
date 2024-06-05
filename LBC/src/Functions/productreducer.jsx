import { SET_produ_list,SET_produ_list1, SET_produ_list2,SET_produ_list3,SET_produ_list4,SET_produ_list5,SET_produ_list6,SET_produ_list7,SET_produ_list8, SET_produ_list9 } from "./Constant";

export const ProductData = (data = [], action) => {
  switch (action.type) {
    case SET_produ_list:
      console.log("product", action);
      return [...action.data];

    case  SET_produ_list1:
      console.log("product", action);
      return [...action.data];

      case  SET_produ_list2:
        console.log("product", action);
        return [...action.data];

        case  SET_produ_list3:
          console.log("product", action);
          return [...action.data];  
          
          case  SET_produ_list4:
            console.log("product", action);
            return [...action.data];  
            
            case  SET_produ_list5:
              console.log("product", action);
              return [...action.data]; 
              
              case  SET_produ_list6:
                console.log("product", action);
                return [...action.data];   
                
               
                case  SET_produ_list7:
                  console.log("product", action);
                  return [...action.data]; 
                  
                  case  SET_produ_list8:
                    console.log("product", action);
                    return [...action.data];   
                    
                    case  SET_produ_list9:
                      console.log("product", action);
                      return [...action.data];   
      
    default:
      return data;
  }
};
