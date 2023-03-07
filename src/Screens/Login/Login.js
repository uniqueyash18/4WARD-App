import { View, Text, Image, TouchableOpacity } from "react-native"
import ButtonComp from "../../Components/ButtonComp"
import InputComp from "../../Components/InputComp"
import ImagePath from "../../Constants/ImagePath"
import StringContants from "../../Constants/StringContants"
import { styles } from "./Loginstyles"
export const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View >
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.btncontainer}>
                    <Image source={ImagePath.backarrow} style={styles.backarrow} />
                </TouchableOpacity>
                <Text style={styles.welcome}>{StringContants.Welcome}</Text>
                <Text style={styles.weAreHappy}>{StringContants.We_are_Happy}</Text>
            </View>
            <View style={styles.mobilebox}>
                <View style={styles.mobilecode}>
                    <InputComp placeholder="+91" keyboardtype='numeric' />
                </View>
                <View style={styles.mobileno}>
                    <InputComp placeholder={StringContants.Mobile_No} keyboardtype='numeric' />
                </View>
            </View>
            <View style={styles.password}>
                <InputComp placeholder={StringContants.Password} Show="Show" hide={true} />
            </View>
            <View style={styles.forgotContainer}>
                <TouchableOpacity>
                    <Text style={styles.useotp}>{StringContants.UseOTP}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotpass}>{StringContants.Forgot_password}</Text>
                </TouchableOpacity>
            </View>
            <ButtonComp title={StringContants.Login} />
        </View>
    )
}