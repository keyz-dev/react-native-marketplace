import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: SIZES.height-150
    },
    emptyText: { fontSize: 18, textAlign: 'center', marginTop: 50 },
    totalContainer: { padding: 10, borderTopWidth: 1, borderColor: '#ccc' },
    totalText: { fontSize: 20, fontWeight: 'bold', textAlign: 'right' },

    
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
  addButtonText: {
      color: COLORS.white,
      fontSize: 18,
      fontFamily: 'bold',
  },
  });

export default styles;