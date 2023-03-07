import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,ScrollView } from "react-native"
import ButtonComp from "../../Components/ButtonComp"
import InputComp from "../../Components/InputComp"
import ImagePath from "../../Constants/ImagePath"
import StringContants from "../../Constants/StringContants"
import { styles } from "./SignupStyles"
export const Signup = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
            <View >
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.btncontainer}>
                    <Image source={ImagePath.backarrow} style={styles.backarrow} />
                </TouchableOpacity>
                <Text style={styles.createnew}>{StringContants.Create_a_new_account}</Text>
                <Text style={styles.weAreHappy}>{StringContants.Create_an_account_so_you_can_continue}</Text>
            </View>
            <View style={styles.names}>
                <View style={styles.fname}>
                    <InputComp placeholder={StringContants.First_Name} keyboardtype='default' />
                </View>
                <View style={styles.lname}>
                    <InputComp placeholder={StringContants.Last_Name} keyboardtype='default' />
                </View>
            </View>
            <View style={styles.password}>
                <InputComp placeholder={StringContants.Email} keyboardtype='email-address' />
            </View>
            <View style={styles.mobilebox}>
                <View style={styles.mobilecode}>
                    <InputComp placeholder="+91" keyboardtype='numeric' />
                </View>
                <View style={styles.mobileno}>
                    <InputComp placeholder={StringContants.Mobile_No} keyboardtype='numeric' />
                </View>
            </View>
            <ButtonComp title={StringContants.Signup} onPress={()=>{navigation.navigate('OtpScreen')}} />
        </ScrollView>
        </TouchableWithoutFeedback> 
    )
}