import { Image } from "react-native"
import { View } from "react-native"
import ImagePath from "../Constants/ImagePath"

export default()=>{
    return(
        <View style={{marginTop:50}}>
            <Image source={ImagePath.backarrow} style={{height:20,width:20}}/>
        </View>
    )
}