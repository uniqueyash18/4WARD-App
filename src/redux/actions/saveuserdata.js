import { userData } from "../reducers/LoginReducer";
import { store } from "../store";
const{dispatch}=store
export const senduserdata=async(data)=>{
dispatch(userData(data))
}

