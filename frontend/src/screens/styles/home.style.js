import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "bold",
        fontSize: 40
    },  
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small,
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    location: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
    cartCount: {
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999
    },
    cartNumber:{
        fontFamily: "semibold",
        fontWeight: "600",
        fontSize: SIZES.xSmall,
        color: COLORS.lightWhite,
    }

})

export default styles;