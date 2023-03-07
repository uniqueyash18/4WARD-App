import { StyleSheet, Text } from "react-native"
import { TouchableOpacity } from "react-native"
import { moderateScale, moderateVerticalScale } from "react-native-size-matters"

export default ({ title,onPress }) => {
    const styles = StyleSheet.create({
        btn: {
            backgroundColor: '#F43738',
            borderRadius: moderateScale(8),
            height: moderateVerticalScale(48),
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical:moderateScale(14), 
        },
        btntext: {
            color: '#FFFFFF',
            fontSize: moderateVerticalScale(14),
            fontWeight: 'bold',
            letterSpacing: moderateScale(0.88)
        }
    })
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}><Text style={styles.btntext}>{title}</Text></TouchableOpacity>
    )
}