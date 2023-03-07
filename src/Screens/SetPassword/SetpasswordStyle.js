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
    Setpass: {
        height: moderateScale(40),
        color: "#FFFFFF",
        fontSize: moderateVerticalScale(24),
        lineHeight: moderateScale(32),
        marginTop: moderateScale(16)
    },
    Createandsecure: {
        color: '#A6A6A6',
        fontSize: moderateVerticalScale(15),
        marginBottom: moderateScale(16)
    },
    password:{
        marginBottom:moderateScale(136)
    }
})