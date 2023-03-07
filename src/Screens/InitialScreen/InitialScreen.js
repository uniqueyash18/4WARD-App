import { Image, Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import ButtonComp from "../../Components/ButtonComp"
import SocialButton from "../../Components/SocialButton"
import ImagePath from "../../Constants/ImagePath"
import StringContants from "../../Constants/StringContants"
import { styles } from "./InitialScreenStyle"

export const InitialScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imglogo} source={ImagePath.mainlogo} />
            <Text style={styles.toptext}>{StringContants.By_clicking_privacy_policy}</Text>
            <View>
                <ButtonComp title={StringContants.LogIn_Phone_No} onPress={()=>{navigation.navigate('Login')}} />
                <Text style={styles.or}>Or</Text>
            </View>
            <SocialButton logoimg={ImagePath.googlelogo} title={StringContants.LogIn_Google} />
            <SocialButton logoimg={ImagePath.facebooklogo} title={StringContants.LogIn_Facebook} />
            <SocialButton logoimg={ImagePath.applelogo} title={StringContants.LogIn_Apple} />            
            <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}} style={styles.bottomtext}>
                <Text style={styles.newhere}>{StringContants.New_here}</Text>
                <Text style={styles.signup}>{StringContants.Sign_Up}</Text>
            </TouchableOpacity>
        </View>
    )
}