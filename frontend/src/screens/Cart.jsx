import React from 'react'
import styles from './styles/cart.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useCart } from '../stateManagement/contexts';
import CartTile from '../components/cart/CartTile';
import { Header } from '../components'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <SafeAreaView >

      <Header title={"My Cart"} />
      <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <>
          <ScrollView>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.product._id}
              renderItem={({ item }) => (
                <CartTile
                  item={item}
                  onRemove={removeFromCart}
                  onQuantityChange={updateQuantity}
                />
              )}
            />
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total: ${getTotalPrice().toFixed(2)}</Text>
            </View>
          </ScrollView>
          
          <View>
            <TouchableOpacity 
              onPress={() =>{}}
              style={styles.addButton}>
                
                <Text style={styles.addButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
    </SafeAreaView>
    
  );
};

export default Cart;
