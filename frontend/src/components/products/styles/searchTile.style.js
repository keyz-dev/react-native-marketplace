import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.small,
        flexDirection: 'row',
        padding: SIZES.small,
        backgroundColor: COLORS.white,
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite
    },
    image: {
        width: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignContent: "center"
    },
    productImg: {
        width: "100%",
        height: 65,
        borderRadius: SIZES.xSmall,
        resizeMode: "cover"
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium,
    },
    productTitle: {
        fontSize: SIZES.medium,
        fontFamily: "bold",
        color: COLORS.primary
    },
    category: {
        fontSize: SIZES.small + 2,
        fontFamily: "regular",
        color: COLORS.gray,
        marginTop: 3
    }
})

export default styles;