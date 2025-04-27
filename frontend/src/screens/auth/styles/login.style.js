import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../../../constants'

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        paddingHorizontal: 30, 
        backgroundColor: COLORS.lightWhite 
    },
    image: {
        height: '40%',
        resizeMode: 'contain', 
        alignSelf: 'center',
        marginBottom: SIZES.xxLarge
    },
    title: { 
        fontSize: 28, 
        fontFamily: 'bold',
        marginBottom: 30, 
        color: COLORS.primary, 
        textAlign: 'center' 
    },
    wrapper: {
        marginBottom: 20
    },
    label: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: "right"
    },
    inputWrapper: (borderColor)=> ({
        borderColor: borderColor,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        height: 55,
        paddingHorizontal: SIZES.medium - 1,
        backgroundColor: COLORS.lightWhite,
    }),
    iconStyle: {
        marginRight: 10
    },
    errorMessage: {
        fontFamily: 'regular',
        fontSize: SIZES.xSmall,
        marginLeft: 10,
        color: COLORS.error,
        marginTop: 5
    },
    
    registerText: { color: COLORS.primary, textAlign: 'center', fontSize: 16 },
  });

export default styles