import { View, Text, Image, TouchableOpacity } from "react-native"
import ButtonComp from "../../Components/ButtonComp"
import InputComp from "../../Components/InputComp"
import ImagePath from "../../Constants/ImagePath"
import StringContants from "../../Constants/StringContants"
import { styles } from "./SetpasswordStyle"
export const SetPassword = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View >
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.btncontainer}>
                    <Image source={ImagePath.backarrow} style={styles.backarrow} />
                </TouchableOpacity>
                <Text style={styles.Setpass}>{StringContants.Set_password}</Text>
                <Text style={styles.Createandsecure}>{StringContants.Create_secure_and_unique_password}</Text>
            </View>
            <View style={styles.password}>
                <InputComp placeholder={StringContants.Password} Show="Show" hide={true} />
                <InputComp placeholder={StringContants.Password} Show="Show" hide={true} />
            </View>
            <ButtonComp onPress={()=>{navigation.navigate('Login')}} title={StringContants.Signup} />
        </View>
    )
}