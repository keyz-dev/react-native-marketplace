import { StyleSheet } from "react-native";
import { COLORS, SIZES} from '../../../constants'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: SIZES.xLarge,
        paddingHorizontal: SIZES.small/2
    },
    separator: {
        height: SIZES.medium,
    }
})

export default styles