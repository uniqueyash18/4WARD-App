import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native"
import { moderateScale, moderateVerticalScale } from "react-native-size-matters"

export default ({ placeholder,Show,keyboardtype,hide,onPress }) => {
    const styles = StyleSheet.create({
        textInput: {
            alignItems: 'center',
            justifyContent: 'center',
            flex:1,
            color:'#FFFFFF',
            opacity:0.5
        },
        inputcontainer: {
            height: moderateVerticalScale(48),
            backgroundColor: "#4C4C4C",
            borderRadius: moderateScale(8),
            color: '#FFFFFF',
            alignItems:'center',
            flexDirection: 'row',
            padding:moderateScale(16),
            marginTop:moderateScale(16),
        },
        show:{
            marginLeft:'auto',
            opacity:0.5
        }
    })
    return (
        <View style={styles.inputcontainer}>
            <TextInput style={styles.textInput} placeholder={placeholder} placeholderTextColor='#FFFFFF' keyboardType={keyboardtype} secureTextEntry={hide} />
          {Show?<TouchableOpacity onPress={onPress} style={styles.show}> 
           <Text style={{color:"#FFFFFF"}}>{Show}</Text>
           </TouchableOpacity>:null}
        </View>
    )
}