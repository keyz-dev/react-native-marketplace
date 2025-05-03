import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100, // make space for button
    },
    upperRow: {
        position: 'absolute',
        top: SIZES.xxLarge,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 1,
        width: '100%',
        padding: 16,
    },
    favoriteIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: COLORS.lightWhite,
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
        width: SIZES.width,
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 44,
        top: 20
    },
    name: {
        fontFamily: 'bold',
        fontSize: SIZES.large,
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price: {
        paddingHorizontal: 10,
        fontFamily: "semibold",
        fonstSize: SIZES.xLarge
    },
    ratingRow:{
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 10,
        top: 5
    },
    rating: {
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: SIZES.large
    },
    ratingText: {
        color: COLORS.gray,
        fontFamily: 'medium',
        paddingHorizontal: SIZES.xSmall
    },  
    descriptionWrapper: {
        marginTop: SIZES.large*2,
        marginHorizontal: SIZES.large
    },
    descriptionTitle: {
        fontFamily: 'medium',
        fontSize: SIZES.large - 2,
    },
    description: {
        fontFamily: 'regular',
        fontSize: SIZES.medium-3,
        textAlign: 'justify',
        color: COLORS.gray,
        marginBottom: SIZES.small
    },

    location: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: SIZES.large
        
    },  

    addButton: {
        fontFamily: 'regular',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    removeButton: {
        fontFamily: 'regular',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: COLORS.gray2,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: 'bold',
    },
    removeButtonText: {
        color: COLORS.primary,
        fontSize: 18,
        fontFamily: 'bold',
    },
  });

export default styles;
