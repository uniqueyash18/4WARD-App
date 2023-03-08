import { useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import ButtonComp from "../../Components/ButtonComp"
import InputComp from "../../Components/InputComp"
import ImagePath from "../../Constants/ImagePath"
import StringContants from "../../Constants/StringContants"
import { styles } from "./SetpasswordStyle"
export const SetPassword = ({ navigation }) => {
    const [password,SetPassword]=useState('')
    const [Confirmpassword,SetConfrimPassword]=useState('')
    function gotologin(){
        if(password===Confirmpassword){
        navigation.navigate('Login')
    }else{alert("Password Missmatch")}
    }
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
                <InputComp placeholder={StringContants.Password} Show="Show" hide={true} value={password} onchange={(val)=>{SetPassword(val)}} />
                <InputComp placeholder={StringContants.Password} Show="Show" hide={true} value={Confirmpassword} onchange={(val)=>{SetConfrimPassword(val)}}/>
            </View>
            <ButtonComp onPress={gotologin} title={StringContants.Signup} />
        </View>
    )
}