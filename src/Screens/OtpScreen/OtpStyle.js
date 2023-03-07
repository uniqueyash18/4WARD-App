import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    backarrow: {
        width: moderateVerticalScale(13),
        height: moderateVerticalScale(12),
        margin: moderateScale(6),

    },
    btncontainer: {
        marginTop: moderateScale(56)
    },
    container: {
        flex: 1,
        backgroundColor: "#2E2E2E",
        paddingHorizontal: moderateScale(24)
    },
    Heading: {
        color: "#FFFFFF",
        fontSize: moderateVerticalScale(24),
        marginTop: moderateScale(16)
    },
    EditMyNo: {
        color: "#32C5FF",
        fontSize: moderateVerticalScale(15),
        lineHeight: moderateScale(32),
        height: moderateVerticalScale(24)
    },
    otpcontainer: {
        flexDirection: 'row',
        gap: moderateScale(16),
        marginTop: moderateScale(32)
    },
    otpbox:{width:moderateScale(40)},
    resend:{ color:'#FFFFFF',
    marginTop:moderateScale(120),
    marginBottom:moderateScale(24)
}
       
    
})