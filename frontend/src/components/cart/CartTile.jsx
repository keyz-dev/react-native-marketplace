import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartTile = ({ item, onRemove, onQuantityChange }) => {
  const { product, quantity } = item;

  const placeholderAddress = "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.images?.[0]?.url || placeholderAddress }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => onQuantityChange(product._id, quantity - 1)}>
            <Ionicons name="remove-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => onQuantityChange(product._id, quantity + 1)}>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => onRemove(product._id)} style={styles.removeBtn}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 10, alignItems: 'center', borderBottomWidth: 1, borderColor: '#ccc' },
  image: { width: 80, height: 80, borderRadius: 8 },
  details: { flex: 1, marginLeft: 10 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: '#888', marginVertical: 4 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  quantity: { marginHorizontal: 10, fontSize: 16 },
  removeBtn: { padding: 8 },
});

export default CartTile;
