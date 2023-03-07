import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters";
export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2E2E2E',
        flex: 1,
    },
    main: {
        backgroundColor: '#2E2E2E',
    },
    card: {
        height:moderateVerticalScale(647),
        width:moderateVerticalScale(315),
        backgroundColor: "#4C4C4C",
        alignItems: "center",
        flex: 1,
        marginLeft: moderateScale(24),
        borderRadius: moderateScale(16),
        marginTop: moderateScale(57),
        paddingHorizontal: moderateScale(24),
    },
    card2: {
        height:moderateVerticalScale(647),
        width:moderateVerticalScale(315),
        backgroundColor: "#4C4C4C",
        alignItems: "center",
        flex: 1,
        marginLeft: moderateScale(8),
        borderRadius: moderateScale(16),
        marginTop: moderateScale(57),
        paddingHorizontal: moderateScale(24),
    },
    img: {
        marginTop: moderateScale(100),
        marginHorizontal: moderateScale(53)
    },
    heading: {
        fontSize:moderateScale(22),
        color: '#FFFFFF',
        lineHeight: moderateScale(32),
        marginTop: moderateScale(90),
        textAlign: 'center'
    },
    text2: {
        fontSize: 13,
        color: "#999999",
        textAlign: 'center',
        marginTop: moderateScale(8),
    },
    getstarted: {
        color: "#FFFFFF",
        fontSize: moderateScale(15),
        fontWeight: 500,
        lineHeight: moderateVerticalScale(32),
        textAlign: "right",
        marginRight: moderateScale(15)
    },
    bottomarea:{
        margin:moderateScale(23)
    }
})