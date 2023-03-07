import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";

export const styles=StyleSheet.create({
    container:{
     backgroundColor:'#2E2E2E'  ,
     flex:1,
     paddingHorizontal:moderateScale(24) 
    },
    imglogo:{
        width:moderateScale(121),
        height:moderateScale(178),
        marginTop:moderateScale(128),
        marginHorizontal:moderateScale(127),
        alignSelf:'center'
    },
    toptext:{
        color:'#9C9C9C',
        marginTop:moderateScale(54),
        textAlign:'center',
        fontSize:moderateVerticalScale(13),
        marginBottom:moderateScale(24)

    },
    or:{
        color:'#FFFFFF',
        textAlign:'center',
        marginTop:moderateScale(16),
        fontSize:moderateVerticalScale(16)
    },
    bottomtext:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:moderateScale(16)
    },
    signup:{
        color:'#41CCFF',
        fontSize:moderateVerticalScale(14)
    },
    newhere:{
        color:"#FFFFFF",
        fontSize:moderateVerticalScale(14)
    }
    
})